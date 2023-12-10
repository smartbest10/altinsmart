const { customerordermodel } = require("../../../customer/core/db/order");
const { orderactivitymodel } = require("../../../customer/core/db/order_activity");
const { dispatchlistmodel } = require("../../../rider/core/db/order");


const adminconfirmcustomerorderModel = async (data, res) => {
    try {
      const { orderid, adminid, } = data;
      const customerorder = await customerordermodel.findById(orderid)
      const customerid = customerorder._id
    
      const updateaddress = await customerordermodel.findByIdAndUpdate(orderid, {
        $set: {
            order_complete : true
        },
      });

      const order = await new dispatchlistmodel({
        customerorderid : orderid , admin_approved :adminid
      });

      await order.save();
      //update order activity
      const orderactivity = await new orderactivitymodel({
         orderid , activity :'order is ready for pickup' , customerid
      });

      await orderactivity.save();
      return updateaddress;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
module.exports = {
    adminconfirmcustomerorderModel
}
  
