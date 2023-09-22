const joi = require("joi");
const { handleError } = require("../utils");

const createbrandValidation = (req, res, next) => {
    const schema = joi.object({
        brandname: joi.string().required(),
      sellerid: joi.string().required(),
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
  
const retrievesellerbrandValidation = (req, res, next) => {
    const schema = joi.object({
      sellerid: joi.string().required(),
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
    retrievesellerbrandValidation ,   createbrandValidation
}