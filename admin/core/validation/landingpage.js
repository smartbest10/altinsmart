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

const adminaddfeatureshopValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
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

const admindeletefeatureshopValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    featuredshopid: joi.string().required(),
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

const adminretrievesinglefeatureshopValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
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

const adminaddflashsaleValidation = (req, res, next) => {
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

const admindeleteflashsaleValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    flashsaleid: joi.string().required(),
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

const adminretrievesingleflashsaleValidation = (req, res, next) => {
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
  createtopcategoryValidation,
  deletetopcategoryValidation,
  retrieveallcategoryproductValidation,
  retrieveallsellerproductValidation,
  adminretrievesinglefeatureshopValidation,
  admindeletefeatureshopValidation,
  adminaddfeatureshopValidation,
  adminretrievesingleflashsaleValidation,
  admindeleteflashsaleValidation, adminaddflashsaleValidation
};
