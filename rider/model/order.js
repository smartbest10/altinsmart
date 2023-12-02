const { customerordermodel } = require("../../customer/core/db/order");
const { ordercodemodel } = require("../../customer/core/db/order_code");
const { sellerordermodel } = require("../../seller/core/db/order");
const { dispatchordermodel } = require("../core/db/dispatch_order");
const { dispatchlistmodel } = require("../core/db/order");

const rideractivateneworderModel = async (data, res) => {
  try {
    const { riderid, orderid } = data;
    const form = await new dispatchordermodel({
      riderid,
      customerorderid: orderid,
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

    //update rider
    const updaterider = await dispatchordermodel.findOneAndUpdate(
      { customerorderid: orderid },
      {
        $set: {
          order_status: "delivered",
        },
      }
    );
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
