const { ProductModel } = require("../../seller/core/db/product");


const approveproductModel = async (data, res) => {
    try {
      const {
        productid
      } = data;
  
      const form = await ProductModel.findByIdAndUpdate(productid , {
          $set: {
             productApproved:true
         }
      });
  
      return form
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
  
const retrievesingleproductModel = async (data, res) => {
    try {
      const {
        productid
      } = data;
  
      const form = await ProductModel.findById(productid);
  
      return form
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
  
module.exports = {
    approveproductModel , retrievesingleproductModel
  }