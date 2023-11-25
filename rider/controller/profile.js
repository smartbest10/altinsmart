const { RiderModel } = require("../core/db/rider");
const { riderUpdateprofileModel, riderUpdatevehicleModel } = require("../model/profile");


const riderretrieveprofileController = async (req, res, next) => {
    const { riderid } = req.body;
    try {
      const rider = await RiderModel.findById(riderid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "rider successfully retrieved",
        data: rider,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
  const riderupdateprofileController = async (req, res, next) => {
    const { country, email, phone, name, riderid , kin_name , kin_number } = req.body;
    const riderEmail = email.toLowerCase();
    //check if the email exist already , by confirming if the xist email belongs to the current user
  
    const rider = await RiderModel.findOne({ email: riderEmail });
    if (rider._id != riderid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }
    try {
      const data = {
        riderEmail,
        country,
        riderid,
        phone,
        name, kin_name , kin_number
      };
  
      let trainee = await riderUpdateprofileModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
  riderretrieveprofileController , riderupdateprofileController
}