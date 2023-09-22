const { CategoryModel } = require("../core/db/category");
const { handleError } = require("../core/utils");
const {
  createcategoryModel,
  updatecategoryModel,
} = require("../model/category");

const createcategoryController = async (req, res, next) => {
  const { category_description, category , category_image} = req.body;
  const categoryname = category.toLowerCase();
  try {
    const cat = await CategoryModel.findOne({ category: categoryname });
    if (cat) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "category already exist",
        data: [],
        error: "category already exist",
      });
    }

    const data = {
      categoryname,
      category_description, category_image
    };

    let trainee = await createcategoryModel(data, res);
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

const retrievesinglecategoryController = async (req, res, next) => {
  const { categoryid } = req.body;
  try {
    const cat = await CategoryModel.findById(categoryid);

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

const retrieveallcategoryController = async (req, res, next) => {
  try {
    const cat = await CategoryModel.find();

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

const updatecategoryController = async (req, res, next) => {
  const { category_description, category, categoryid , category_image } = req.body;
  const categoryname = category.toLowerCase();
  try {
      const cat = await CategoryModel.findOne({category:categoryname});
    if (cat) {
        if (cat.category != categoryname) {
            return res.status(200).json({
              status_code: 400,
              status: true,
              message: "category already exist",
              error: "category already exist",
            });
          }
    }

    const data = {
      category_description,
      categoryname, category_image ,
      categoryid,
    };

    let trainee = await updatecategoryModel(data, res);
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
  createcategoryController,
  updatecategoryController,
  retrieveallcategoryController,
  retrievesinglecategoryController,
};
