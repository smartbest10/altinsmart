const joi = require("joi");
const { handleError } = require("../utils");

const createcategoryValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        category: joi.string().required(),
      category_description: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
};
  
const updatecategoryValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        category: joi.string().required(),
        categoryid: joi.string().required(),
      category_description: joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
};
  

const retrievedeletecategoryValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        categoryid: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
};
  
module.exports = {
    createcategoryValidation , retrievedeletecategoryValidation ,  updatecategoryValidation
}