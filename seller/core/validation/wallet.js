const joi = require("joi");
const { handleError } = require("../utils");


const sellerwithdrawwalletValidation = (req, res, next) => {
  const schema = joi.object({
    sellerid: joi.string().required(),
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


const sellerwallethistoryValidation = (req, res, next) => {
  const schema = joi.object({
    sellerid: joi.string().required(),
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
    sellerwithdrawwalletValidation , sellerwallethistoryValidation
}