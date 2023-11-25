const { RiderModel } = require("../core/db/rider");


const riderUpdateprofileModel = async (data, res) => {
    try {
      const {  riderEmail,
        country,
        riderid,
        phone,
        name, kin_name , kin_number } = data;
  
      const form = await RiderModel.findByIdAndUpdate(riderid, {
        $set: {
          country,
          email: riderEmail,
          phone,
          name, kin : { kin_name , kin_number }
        },
      });
  
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  


  
module.exports = {
     riderUpdateprofileModel
}