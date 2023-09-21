const { ProductModel } = require("../core/db/product");
const { create_seller_token } = require("../core/utils");


const createProductModel = async (data, res) => {
  try {
    const {
    
        name , price , brand , image , negiotable , description , category , seller
    } = data;

    const form = await new ProductModel({
        name , price , brand , image , negiotable , description , category , seller
    });
    const productDetails = await form.save()

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const updateProductModel = async (data, res) => {
  try {
    const {
    
        name , price , brand , image , negiotable , description , productid
    } = data;

      const updateproduct = await ProductModel.findByIdAndUpdate(productid, {
          $set: {
            name , price , brand , image , negiotable , description ,
       }
   })

    return updateproduct;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


const retrievesellerProductModel = async (data, res) => {
  try {
    const { sellerid  } = data;

      const product = await ProductModel.find({sellerid})

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const deleteProductModel = async (data, res) => {
  try {
    const { productid  } = data;

      const product = await ProductModel.findByIdAndDelete(productid)

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


module.exports = {
    createProductModel , updateProductModel , retrievesellerProductModel , deleteProductModel
}