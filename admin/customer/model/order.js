const { customerordermodel } = require("../../../customer/core/db/order");
const { dispatchlistmodel } = require("../../../rider/core/db/order");


const adminconfirmcustomerorderModel = async (data, res) => {
    try {
      const { orderid , adminid ,  } = data;
    
      const updateaddress = await customerordermodel.findByIdAndUpdate(orderid, {
        $set: {
            order_complete : true
        },
      });

      const order = await new dispatchlistmodel({
        customerorderid : orderid , admin_approved :adminid
      });

      await order.save();
      return updateaddress;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
module.exports = {
    adminconfirmcustomerorderModel
}
  
