const jwt = require('jsonwebtoken');
const { riderJWT } = require('../../helper/utils');
const { RiderModel } = require('./db/rider');



const rider_check_token = async (req, res, next) => {
  let rider = req.body.riderid
  const checkuser = await RiderModel.findById(rider)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "rider does not exist",
  
      error: "rider does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, riderJWT)
        const riderid = decoded.user
        if (rider != riderid) {
          console.og('id' , riderid , rider)
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
    rider_check_token 
}