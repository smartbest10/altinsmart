const { ProductModel } = require("../../seller/core/db/product");
const {
  approveproductModel,
  retrievesingleproductModel,
} = require("../model/product");

const approveproductController = async (req, res, next) => {
  const { productid } = req.body;
  try {
    const data = {
      productid,
    };

    let trainee = await approveproductModel(data, res);
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
const retrievesingleproductController = async (req, res, next) => {
  const { productid } = req.body;
  try {
    const data = {
      productid,
    };

    let trainee = await retrievesingleproductModel(data, res);
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

const retrieveapproveproductController = async (req, res, next) => {
  try {
    let product = await ProductModel.find({ productApproved: true });
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

const retrieveunapproveproductController = async (req, res, next) => {
  try {
    let product = await ProductModel.find({ productApproved: false });
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

const retrieveallproductController = async (req, res, next) => {
  try {
    let product = await ProductModel.find();
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

module.exports = {
  approveproductController,
  retrievesingleproductController,
  retrieveapproveproductController,
  retrieveunapproveproductController, retrieveallproductController
};
