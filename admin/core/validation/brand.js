const joi = require("joi");
const { handleError } = require("../utils");

const createbrandValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        brand: joi.string().required(),
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
  
const updatebrandValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        brandid: joi.string().required(),
        brand: joi.string().required()
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
  

const retrievedeletebrandValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        brandid: joi.string().required(),
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
    createbrandValidation , retrievedeletebrandValidation ,  updatebrandValidation
}