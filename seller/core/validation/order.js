

const joi = require("joi");
const { handleError } = require("../utils");

const sellerorderValidation = (req, res, next) => {
    const schema = joi.object({
        orderid: joi.string().required(),
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

module.exports = {
    sellerorderValidation
}