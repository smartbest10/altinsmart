const { CategoryModel } = require("../core/db/category");



const createcategoryModel = async (data, res) => {
    try {
      const {
        categoryname , category_description
      } = data;
  
      const form = await new CategoryModel({
          category: categoryname , category_description
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
      const { category_description, categoryname , categoryid } = data;
  
      const form = await CategoryModel.findByIdAndUpdate(categoryid, {
        $set: {
          category_description , category:categoryname
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