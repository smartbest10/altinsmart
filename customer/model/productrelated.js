const { ProductModel } = require("../../seller/core/db/product");
const { productreviewModel } = require("../core/db/productreview");



const customerproductreviewModel = async (data, res) => {
    try {
      const {
        customerid , productid , review
      } = data;
      const form = await new productreviewModel({
        customerid , productid , review
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
  };
  
  const customerretrievesingleproductModel = async (data, res) => {
    try {
      const { productid } = data;
        const product = await ProductModel.findById(productid)
        const review = await productreviewModel.find({productid})
         const data = { product , review}
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
module.exports = {
    customerproductreviewModel ,  customerretrievesingleproductModel
}