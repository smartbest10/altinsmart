const { customerproductreviewModel } = require("../model/productrelated");



const CustomerreviewproductController = async (req, res, next) => {
    const {
      customerid , productid , review
      
    } = req.body;
    try {
  

        const data = {
            customerid , productid , review
        }
        let comment = await customerproductreviewModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "customer successfully retrieved",
        data: comment
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    CustomerreviewproductController
}