const { ProductModel } = require("../../seller/core/db/product");
const { productreviewModel } = require("../core/db/productreview");


const updateproductrating =  async(id) => {
  const allproduct = await productreviewModel.find({ productid: id })
  const allratings = allproduct.map((x) => x.rating)
  const numberArray = allratings.map(Number);
  let sum = 0;

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  const mean = sum / numberArray.length
  const updateproduct = await ProductModel.findByIdAndUpdate(id, {
    $set: {
      rating : mean
    }
  })
  return 'done'
}

const customerproductreviewModel = async (data, res) => {
    try {
      const {
        customerid,
        productid,
        review, sellerid, rating,
      } = data;
      //check if customer as an existing rating and review for this product
      const checkuser = await productreviewModel.findOne({ customerid, productid })
      if (checkuser) {
        await productreviewModel.findOneAndUpdate({ customerid, productid }, {
          $set: {
            review , rating
          }
        })
        //for rating algorithm
        const updaterating = await updateproductrating(productid)
        return 'success'
      }
      const form = await new productreviewModel({
        customerid,
        productid,
        review, sellerid, rating,
      });
     
      const userDetails = await form.save()
      //for rating algorithm
      const updaterating = await updateproductrating(productid)
      return 'success'
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