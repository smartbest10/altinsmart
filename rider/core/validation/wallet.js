const joi = require("joi");
const { handleError } = require("../utils");


const riderwithdrawwalletValidation = (req, res, next) => {
  const schema = joi.object({
    riderid: joi.string().required(),
    walletid: joi.string().required(),
    amount: joi.number().required(),
    status: joi.boolean().required(),
    trx_type: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
   return handleError(err)(res);
  }
  return next();
};


const riderwallethistoryValidation = (req, res, next) => {
  const schema = joi.object({
    riderid: joi.string().required(),
    walletid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
   return handleError(err)(res);
  }
  return next();
};


module.exports = {
    riderwithdrawwalletValidation , riderwallethistoryValidation
}