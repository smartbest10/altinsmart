const { sellerretrieveallorderModel, sellerretrievesingleorderModel } = require("../model/order");


const sellerretrieveallorderController = async (req, res, next) => {
    const { sellerid } = req.body;
  
    try {
      const data = { sellerid };
  
      let trainee = await sellerretrieveallorderModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
const sellerretrievesingleorderController = async (req, res, next) => {
    const { orderid } = req.body;
  
    try {
      const data = { orderid };
  
      let trainee = await sellerretrievesingleorderModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  

module.exports = {
    sellerretrieveallorderController , sellerretrievesingleorderController
}