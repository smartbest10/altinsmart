const joi = require("joi");
const { handleError } = require("../utils");

const sellerupdateprofile1Validation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    biography: joi.string().required(),
    phone: joi.string().required(),
    sellerid: joi.string().required(),
    name: joi.string().required(),
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

const sellerupdatephotoValidation = (req, res, next) => {
  const schema = joi.object({
    photo: joi.string().required(),
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

const sellerupdateprofile2Validation = (req, res, next) => {
  const schema = joi.object({
    page_per_view: joi.number().required(),
    sellerid: joi.string().required(),
    term_and_condition: joi.string().required(),
    public_visitibilty: joi.boolean().required(),
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

const sellerupdateprofile3Validation = (req, res, next) => {
  const schema = joi.object({
    bussiness_name: joi.string().required(),
    sellerid: joi.string().required(),
    address_one: joi.string().required(),
    address_two: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    country: joi.string().required(),
    map_location: joi.string().required(),
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

const selleraddcategoryValidation = (req, res, next) => {
  const schema = joi.object({
    category: joi.array().required(),
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
const selleraddbrandValidation = (req, res, next) => {
  const schema = joi.object({
    brand: joi.array().required(),
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

const selleraddaccountValidation = (req, res, next) => {
  const schema = joi.object({
    account_type: joi.string().required(),
    account_url: joi.string().required(),
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
const sellerremoveaccountValidation = (req, res, next) => {
  const schema = joi.object({
    sellerid: joi.string().required(),
    account_id: joi.string().required(),
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
  sellerupdateprofile1Validation,
  sellerupdatephotoValidation,
  sellerupdateprofile2Validation,
  sellerupdateprofile3Validation,
  selleraddaccountValidation,
  selleraddcategoryValidation,
  selleraddbrandValidation,  sellerremoveaccountValidation 
};
