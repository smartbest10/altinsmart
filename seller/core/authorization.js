const jwt = require('jsonwebtoken');
const { sellerJWT } = require('../../helper/utils');
const { SellerModel } = require('./db/seller');



const seller_check_token = async (req, res, next) => {
  let seller = req.body.sellerid
  const checkuser = await SellerModel.findById(seller)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "seller does not exist",
  
      error: "seller does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, sellerJWT)
        const user = decoded.user
        if (seller != user) {
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
         }
                 

       next()
      } catch (error) {
        console.log(error)
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
    }
}



module.exports = {
    seller_check_token 
}