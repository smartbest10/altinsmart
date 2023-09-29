const { handleError } = require("../utils");
const joi = require("joi");

const customercreateproductreviewValidation = (req, res, next) => {
  const schema = joi.object({
    review: joi.string().required(),
    productid: joi.string().required(),
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

const customeraddwishlistValidation = (req, res, next) => {
  const schema = joi.object({
    productid: joi.string().required(),
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

const customerfollowstoreValidation = (req, res, next) => {
  const schema = joi.object({
    sellerid: joi.string().required(),
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

const customerretrievesingleproductValidation = (req, res, next) => {
  const schema = joi.object({
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
  customercreateproductreviewValidation,
  customeraddwishlistValidation,
  customerfollowstoreValidation,
  customerretrievesingleproductValidation,
};
