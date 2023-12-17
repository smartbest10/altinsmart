const { BrandModel } = require("../../admin/core/db/brand");
const { CategoryModel } = require("../../admin/core/db/category");
const { ProductModel } = require("../../seller/core/db/product");
const { productreviewModel } = require("../core/db/productreview");
const { handleError } = require("../core/utils");
const { customerproductreviewModel } = require("../model/productrelated");

const userproductnamesearchController = async (req, res, next) => {
  try {
    const { name } = req.body;
    let trainee = await ProductModel.find({ $text: { $search: name } });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userproductnameController = async (req, res, next) => {
  try {
    const { name } = req.body;
    let trainee = await ProductModel.find({ $text: { $search: name } }).select(
      "name"
    );
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const CustomerreviewproductController = async (req, res, next) => {
  const { customerid, sellerid, rating, productid, review } = req.body;
  try {
    const data = {
      customerid,
      productid,
      review,
      sellerid,
      rating,
    };
    let comment = await customerproductreviewModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

//retrieve all brands
const CustomerretrieveallbrandController = async (req, res, next) => {
  try {
    let brand = await BrandModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: brand,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const CustomerretrieveallcategoryController = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find().sort({
      product_purchased: -1,
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const customerretrievecategoryproductController = async (req, res, next) => {
  try {
    const { category } = req.body;
    let product = await ProductModel.find({ category });
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

const customerretrievesellerproductController = async (req, res, next) => {
  try {
    const { seller } = req.body;
    let product = await ProductModel.find({ sellerid: seller });
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
const CustomerretrievesingleproductController = async (req, res, next) => {
  const { productid } = req.body;
  try {
    const review = await productreviewModel.find({ productid });
    const product = await ProductModel.findById(productid);
    const productdata = { product, review };
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: productdata,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  CustomerreviewproductController,
  CustomerretrievesingleproductController,
  CustomerretrieveallbrandController,
  customerretrievecategoryproductController,
  CustomerretrieveallcategoryController,
  customerretrievesellerproductController,
  userproductnamesearchController,
  userproductnameController,
};
