const joi = require('joi')

const customercreateordervalidation = (req, res, next) => {
  const schema = joi.object({
    customerid: joi.string().required(),
    delivery_fee: joi.number().required(),
    price: joi.number().required(),
    shipping_address: joi.string().required(),
    delivery_vehicle: joi.string().required(),
    cart: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const customerordervalidation = (req, res, next) => {
  const schema = joi.object({
    customerid: joi.string().required(),
    orderid: joi.string().required(),
   
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

module.exports = {
    customercreateordervalidation  , customerordervalidation
}