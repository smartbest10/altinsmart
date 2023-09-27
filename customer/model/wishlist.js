const { ProductModel } = require("../../seller/core/db/product");
const { CustomerModel } = require("../core/db/customer");


const customeraddwishlistModel = async (data, res) => {
    try {
      const { customerid, productid } = data;
      const form = await CustomerModel.findByIdAndUpdate(customerid, {
        $push: {
          wishlist: {productid}
        },
      });
      return form;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
const customerremovewishlistModel = async (data, res) => {
    try {
      const { customerid, productid } = data;
      const form = await CustomerModel.findByIdAndUpdate(customerid, {
        $pull: {
          wishlist: {productid}
        },
      });
      return form;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
const customerretrievewishlistModel = async (data, res) => {
    try {
      const { customerid } = data;
        const customer = await CustomerModel.findById(customerid);
        const wishlist = customer.wishlist.map((x) => {
            return x.productid
        })
        const products = await ProductModel.find({_id : wishlist})
      return products;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
  
module.exports = {
    customeraddwishlistModel , customerremovewishlistModel , customerretrievewishlistModel
}