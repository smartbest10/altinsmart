const joi = require("joi");
const { handleError } = require("../utils");

const createtopcategoryValidation = (req, res, next) => {
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

const deletetopcategoryValidation = (req, res, next) => {
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
const retrieveallcategoryproductValidation = (req, res, next) => {
  const schema = joi.object({
    category: joi.string().required(),
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
const retrieveallsellerproductValidation = (req, res, next) => {
  const schema = joi.object({
    category: joi.string().required(),
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
  createtopcategoryValidation,
  deletetopcategoryValidation,
  retrieveallcategoryproductValidation, retrieveallsellerproductValidation
};
