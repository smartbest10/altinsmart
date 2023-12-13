
const joi = require('joi')
const customercreateproductqueryValidation = (req, res, next) => {
    const schema = joi.object({
      customerid: joi.string().required(),
      productid: joi.string().required(),
      sellerid: joi.string().required(),
      query: joi.string().required(),
      
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
    customercreateproductqueryValidation
}