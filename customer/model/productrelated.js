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
  
module.exports = {
    customerproductreviewModel
}