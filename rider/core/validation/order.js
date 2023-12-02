const joi = require("joi");
const { handleError } = require("../utils");

const riderorderValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    riderid: joi.string().required(),
    orderid: joi.string().required()
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
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
const riderconfirmdeliveryValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    riderid: joi.string().required(),
    ordercode: joi.string().required()
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
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
    riderorderValidation , riderconfirmdeliveryValidation
}