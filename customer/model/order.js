const { sellerordermodel } = require("../../seller/core/db/order");
const { ProductModel } = require("../../seller/core/db/product");
const { customerordermodel } = require("../core/db/order");
const { ordercodemodel } = require("../core/db/order_code");

const customeraddorderModel = async (data, res) => {
  try {
    const { customerid, delivery_fee, cart, price, shipping_address , delivery_vehicle } = data;
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
    const order = await customerordermodel.findById(orderid);

    return order;
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
