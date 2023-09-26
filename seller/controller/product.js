const { BrandModel } = require("../../admin/core/db/brand");
const { CategoryModel } = require("../../admin/core/db/category");
const { ProductModel } = require("../core/db/product");
const { handleError } = require("../core/utils");
const {
  createProductModel,
  updateProductModel,
  retrieveSingleProductModel,
  deleteProductModel,
  retrievesellerProductModel,
} = require("../model/product");
const { sellerRetrievecategoryModel, sellerRetrievebrandModel } = require("../model/profile");

const createProductController = async (req, res, next) => {
  const {
    productname,
    category,
    sellerid,
    productprice,
    productbrand,
    productnegiotable,
    productdescription, images , isdiscount ,  discount_price ,  discount_startdate ,  discount_enddate
  } = req.body;
  const name = productname.toLowerCase();
  const price = productprice;
  const brand = productbrand;
  const negiotable = productnegiotable;
  const description = productdescription;
  try {
    const data = {
      name,
      price,
      brand,
      images , isdiscount ,  discount_price ,  discount_startdate ,  discount_enddate ,
      negiotable,
      description,
      category,
      sellerid,
    };

    let trainee = await createProductModel(data, res);
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

const updateProductController = async (req, res, next) => {
  const {
    productname,
    productprice,
    productid,
    productbrand,
    productimage,
    productnegiotable,
    productdescription,
  } = req.body;
  const name = productname.toLowerCase();
  const price = productprice;
  const brand = productbrand;
  const image = productimage;
  const negiotable = productnegiotable;
  const description = productdescription;
  try {
    const data = {
      name,
      price,
      brand,
      image,
      negiotable,
      description,
      productid,
    };

    let trainee = await updateProductModel(data, res);
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

const retrieveAllProductController = async (req, res, next) => {
  try {
    const product = await ProductModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: product,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const retrievesellerProductController = async (req, res, next) => {
  const { sellerid } = req.body;

  try {
    const data = { sellerid };

    let trainee = await retrievesellerProductModel(data, res);
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
const deleteProductController = async (req, res, next) => {
  const { productid } = req.body;

  try {
    const data = { productid };

    let trainee = await deleteProductModel(data, res);
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
const sellerRetrievecategoryController = async (req, res, next) => {
  try {
    const { sellerid } = req.body;
    const data = { sellerid };

    let trainee = await sellerRetrievecategoryModel(data, res);
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

const sellerRetrieveorinalcategoryController = async (req, res, next) => {
  try {
    let trainee = await CategoryModel.find();
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
const sellerRetrievebrandController = async (req, res, next) => {
  try {
    console.log('req1', req.body)
    const { sellerid } = req.body;
    const data = { sellerid };

    let trainee = await sellerRetrievebrandModel(data, res);
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

const sellerRetrieveorinalbrandController = async (req, res, next) => {
  try {
    let trainee = await BrandModel.find();
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
  createProductController,
  updateProductController,
  // retrieveAllProductController,
  retrievesellerProductController,
  deleteProductController,
  sellerRetrievecategoryController,
  sellerRetrieveorinalcategoryController,
  sellerRetrievebrandController,
  sellerRetrieveorinalbrandController,
};
