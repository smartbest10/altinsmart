const { customerordermodel } = require("../../customer/core/db/order");
const { ordercodemodel } = require("../../customer/core/db/order_code");
const { sellerordermodel } = require("../../seller/core/db/order");
const { sellerWalletModel } = require("../../seller/core/db/wallet");
const { sellerwallethistoryModel } = require("../../seller/core/db/wallethistory");
const { dispatchordermodel } = require("../core/db/dispatch_order");
const { dispatchlistmodel } = require("../core/db/order");
const { riderWalletModel } = require("../core/db/wallet");
const { riderwallethistoryModel } = require("../core/db/wallethistory");

const rideractivateneworderModel = async (data, res) => {
  try {
    const { riderid, orderid } = data;
    const orders = await customerordermodel.findById(orderid)
    const fee = orders.delivery_fee
    const form = await new dispatchordermodel({
      riderid,
      customerorderid: orderid, delivery_fee : fee
    });

    const riderorder = await form.save();
    //update rider dispatch ;ist
    const updaterider = await dispatchlistmodel.findOneAndUpdate(
      { customerorderid: orderid },
      {
        $set: {
          order_taken: true,
        },
      }
    );

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const riderpickuporderModel = async (data, res) => {
  try {
    const { riderid, orderid } = data;

    //update rider
    const updaterider = await dispatchordermodel.findOneAndUpdate(
      { customerorderid: orderid },
      {
        $set: {
          order_status: "shipping",
        },
      }
    );
    // update customer
    const updatecustomer = await customerordermodel.findByIdAndUpdate(orderid, {
      $set: {
        order_status: "shipping",
      },
    });
    //update seller
    const updateseller = await sellerordermodel.updateMany(
      { orderid },
      {
        $set: {
          status: "shipping",
        },
      }
    );

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const riderconfirmorderdeliveryModel = async (data, res) => {
  try {
    const { riderid, ordercode } = data;
   console.log(ordercode)
    const order = await ordercodemodel.findOne({order_code: ordercode });
    const orderid = order.orderid;
    const rider = await dispatchordermodel.findOne({ riderid })
    const riderfee = rider.delivery_fee
    const sellerorder = await customerordermodel.findById(rider.customerorderid)
    //update rider
    const updaterider = await dispatchordermodel.findOneAndUpdate(
      { customerorderid: orderid },
      {
        $set: {
          order_status: "delivered",
        },
      }
    );
    //update rider wallet
    const updateriderwallet = await riderWalletModel.findOneAndUpdate(
      { riderid },
      { $inc: { balance: riderfee } }
    );
      //add to wallet history
    const riderwallet = await riderWalletModel.findOne({ riderid })
    const riderwalletid = riderwallet._id
      const form = await new riderwallethistoryModel({
        riderid,
        walletid : riderwalletid,
        status : true,
        amount : riderfee, trx_type :'credit'
      });
      await form.save();
    // update customer
    const updatecustomer = await customerordermodel.findByIdAndUpdate(orderid, {
      $set: {
        order_status: "delivered"
      },
    });
  
    //update seller
    const updateseller = await sellerordermodel.updateMany(
      { orderid },
      {
        $set: {
          status: "delivered",
        },
      }
    );
    //update sellerwallet
    await sellerorder.cart.map(async (x) => {
      const sellerid = x.sellerid
      const subprice = x.subprice
      //update the stock of the product
      await sellerWalletModel.findOneAndUpdate({ sellerid }, 
        { $inc: { balance: subprice } }
      );
      //update seller trans
      const sellerwallet = await sellerWalletModel.findOne({sellerid})
      const sellerwalletid = sellerwallet._id
      const form = await new sellerwallethistoryModel({
        sellerid,
        walletid : sellerwalletid,
        status : true,
        amount : x.subprice, trx_type :'credit'
      });
      await form.save();
    });
    //update ordercode
   await ordercodemodel.findOneAndUpdate(
      { orderid },
      {
        $set: {
          code_used: true,
        },
      }
    );

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  rideractivateneworderModel,
  riderpickuporderModel,
  riderconfirmorderdeliveryModel,
};
