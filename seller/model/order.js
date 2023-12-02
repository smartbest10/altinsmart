const { sellerordermodel } = require("../core/db/order");


const sellerretrieveallorderModel = async (data, res) => {
    try {
      const { sellerid } = data;
  
      const product = await sellerordermodel.find({ sellerid });
  
      return product;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
const sellerretrievesingleorderModel = async (data, res) => {
    try {
      const { orderid } = data;
  
      const product = await sellerordermodel.findById( orderid );
  
      return product;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
  
module.exports = {
    sellerretrievesingleorderModel , sellerretrieveallorderModel
}