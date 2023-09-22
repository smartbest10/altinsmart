const { CategoryModel } = require("../core/db/category");



const createcategoryModel = async (data, res) => {
    try {
      const {
        categoryname , category_description , category_image
      } = data;
  
      const form = await new CategoryModel({
          category: categoryname , category_description , category_image
      });
      const userDetails = await form.save()
     ;
  
      return userDetails;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
  
  const updatecategoryModel = async (data, res) => {
    try {
      const { category_description, categoryname , categoryid  , category_image} = data;
  
      const form = await CategoryModel.findByIdAndUpdate(categoryid, {
        $set: {
          category_description , category:categoryname , category_image
        },
      });
  
      return form;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
module.exports = {
    createcategoryModel ,  updatecategoryModel
  }