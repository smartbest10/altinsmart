
const jwt = require('jsonwebtoken');
const {  riderJWT } = require('../../helper/utils');
//create jwt token for users when the signup or login 
const age = 1 * 24 * 60 * 60;
const create_rider_token = (user) => {
  return jwt.sign({ user }, riderJWT, {
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

// handling error based on objects or string
const checkdata = (data,res) => {
  if (typeof data !== 'object' ) {
    console.log('error occured')
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: data,
      error: data,
    })
  }
 
 
}

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}


module.exports = {
  create_rider_token, handleError , checkdata  , generateRandomString
}