
const jwt = require('jsonwebtoken');
const { customerjwt, sellerJWT } = require('../../helper/utils');
//create jwt token for users when the signup or login 
const age = 1 * 24 * 60 * 60;
const create_seller_token = (user) => {
  return jwt.sign({ user }, sellerJWT, {
    expiresIn: age,
  });
};
const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}




module.exports = {
    create_seller_token , handleError
}