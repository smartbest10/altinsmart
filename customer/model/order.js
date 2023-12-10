const { sellerordermodel } = require("../../seller/core/db/order");
const { ProductModel } = require("../../seller/core/db/product");
const { customerordermodel } = require("../core/db/order");
const { orderactivitymodel } = require("../core/db/order_activity");
const { ordercodemodel } = require("../core/db/order_code");
const { WalletModel } = require("../core/db/wallet");
const { wallethistoryModel } = require("../core/db/wallethistory");

const customeraddorderModel = async (data, res) => {
  try {
    const { customerid, delivery_fee, cart, price, shipping_address , delivery_vehicle , use_wallet} = data;
    const form = await new customerordermodel({
      customerid,
      delivery_fee,
      cart,
      price,
      shipping_address, delivery_vehicle
    });

    const order = await form.save();
    const id = order._id;

    //create order code

    //function to create order code
    function generateRandomSixDigitString() {
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      const sixDigitString = randomNumber.toString();
      return sixDigitString;
    }
    const code = generateRandomSixDigitString();
    const ordercode = await new ordercodemodel({
      customerid,
    orderid:id ,
    order_code : code
    });

    await ordercode.save();

    
    //creat order for the seller
    await cart.map(async (x) => {
      const sellerorder = await new sellerordermodel({
        price: x.price,
        subprice: x.subprice,
        quantity: x.quantity,
        sellerid: x.sellerid,
        customerid,
        orderid: id,
        productid: x.productid,
      });

      await sellerorder.save();
      const productid = x.productid
      const quantity = x.quantity
      //update the stock of the product
      await ProductModel.findByIdAndUpdate(productid, 
        { $inc: { quantity: -quantity } }
    );
    });
     //if the user is using wallet , we debit the user here
    if (use_wallet) {
      const wallet = await WalletModel.findOne({ customerid })
      const walletid = wallet._id
      await WalletModel.findByIdAndUpdate(walletid, 
        { $inc: { balance: -price } }
      );
      
      //also update the wallet trans history
        //add to wallet history
    const wallethistory = await new wallethistoryModel({
      customerid,
      walletid,
      status:true ,
      amount : price, order : {orderid : id, order_pay :true }

    });
    await wallethistory.save();
    }
    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const customerretrieveallorderModel = async (data, res) => {
  try {
    const { customerid } = data;
    const order = await customerordermodel.find({ customerid });

    return order;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const customerretrievesingleorderModel = async (data, res) => {
  try {
    const { orderid } = data;
    const order_code = await ordercodemodel.findOne({orderid})
    const order_activity = await orderactivitymodel.find({orderid})
    const order = await customerordermodel.findById(orderid);
    const ordercode = order_code.order_code
    const orderdata = {ordercode , order , order_activity}
    return orderdata;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


const customerconfirmorderModel = async (data, res) => {
  try {
    const { orderid } = data;
    const currentDate = new Date();
   const timestamp = currentDate.getTime();
    const updateaddress = await customerordermodel.findByIdAndUpdate(orderid, {
      $set: {
        delivery: {
          confirm_delivery : true  , delivery_time : timestamp
        }
      },
    });
    return updateaddress;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  customeraddorderModel,
  customerretrieveallorderModel,
  customerretrievesingleorderModel, customerconfirmorderModel
};
