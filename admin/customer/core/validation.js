const joi = require("joi");
const { handleError } = require("../../core/utils");



const admincustomerorderValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    orderid: joi.string().required(),
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
const adminretrievecustomerorderValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    customerid: joi.string().required(),
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
  admincustomerorderValidation,
  adminretrievecustomerorderValidation,
};
