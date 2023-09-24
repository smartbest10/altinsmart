const { BrandModel } = require("../core/db/brand");
const { CategoryModel } = require("../core/db/category");
const { handleError } = require("../core/utils");
const { createbrandModel, updatebrandModel } = require("../model/brand");
const {
  createcategoryModel,
  updatecategoryModel,
} = require("../model/category");

const createbrandController = async (req, res, next) => {
  const { brand } = req.body;
  const brandname = brand.toLowerCase();
  try {
    const checkbrand = await BrandModel.findOne({ brand: brandname });
    if (checkbrand) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "brand already exist",
        error: "brand already exist",
      });
    }

    const data = {
     brandname
    };

    let trainee = await createbrandModel(data, res);
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

const retrievesinglebrandController = async (req, res, next) => {
  const { brandid } = req.body;
  try {
    const brand = await BrandModel.findById(brandid);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: brand,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const retrieveallbrandController = async (req, res, next) => {
  try {
    const cat = await BrandModel.find();

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: cat,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatebrandController = async (req, res, next) => {
  const { brand, brandid  } = req.body;
  const brandname = brand.toLowerCase();
  try {
      const checkbrand = await BrandModel.findOne({brand:brandname});
    if (checkbrand) {
        if (checkbrand.brand != brandname) {
            return res.status(200).json({
              status_code: 400,
              status: true,
              message: "brand already exist",
              error: "brand already exist",
            });
          }
    }

    const data = {
   brandid , brandname
    };

    let trainee = await updatebrandModel(data, res);
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
  createbrandController,
  updatebrandController,
  retrieveallbrandController,
  retrievesinglebrandController,
};
