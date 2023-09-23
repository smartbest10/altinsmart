const joi = require("joi");
const { handleError } = require("../utils");

const approveproductValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        productid: joi.string().required(),
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

const retrievesingleproductValidation = (req, res, next) => {
    const schema = joi.object({
        adminid: joi.string().required(),
        productid: joi.string().required(),
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
    approveproductValidation , retrievesingleproductValidation
}