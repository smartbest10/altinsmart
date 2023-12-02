const { ProductModel } = require("../core/db/product");
const { create_seller_token } = require("../core/utils");

const createProductModel = async (data, res) => {
  try {
    const {
      name,
      price,
      brand,
      negiotable,
      description,
      category,
      sellerid,
      images,
      isdiscount,
      discount_price,
      discount_startdate,
      discount_enddate,
      productarea,
      weight,
      length,
      breadth, quantity
    } = data;

    const form = await new ProductModel({
      name, quantity ,
      price,
      brand,

      negiotable,
      description,
      category,
      sellerid,
      discount: {
        isdiscount,
        discount_price,
        discount_startdate,
        discount_enddate,
      },
      images,
      dimension: {
        length,
        breadth,
        area: productarea,
        weight,
      },
    });
    const productDetails = await form.save();

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
      name,
      price,
      brand,
      negiotable,
      description,
      category,
      seller,
      images,
      isdiscount,
      discount_price,
      discount_startdate,
      discount_enddate,
      productid,
      length,
      breadth,
      weight,
      productarea,quantity
    } = data;

    const updateproduct = await ProductModel.findByIdAndUpdate(productid, {
      $set: {
        name, quantity ,
        price,
        brand,
        negiotable,
        description,
        discount: {
          isdiscount,
          discount_price,
          discount_startdate,
          discount_enddate,
        },
        category,
        images, dimension : {length , breadth , weight , area: productarea}
      },
    });

    return updateproduct;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const retrievesellerProductModel = async (data, res) => {
  try {
    const { sellerid } = data;

    const product = await ProductModel.find({ sellerid });

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const deleteProductModel = async (data, res) => {
  try {
    const { productid } = data;

    const product = await ProductModel.findByIdAndDelete(productid);

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const retrieveallProductModel = async (data, res) => {
  try {
    const product = await ProductModel.find();

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const retrievevesingleProductModel = async (data, res) => {
  try {
    const { productid } = data;

    const product = await ProductModel.findById(productid);

    return product;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  createProductModel,
  updateProductModel,
  retrievesellerProductModel,
  deleteProductModel,
  retrieveallProductModel,
  retrievevesingleProductModel,
};
