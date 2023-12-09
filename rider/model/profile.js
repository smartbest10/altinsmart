const { RiderModel } = require("../core/db/rider");
const { handleError } = require("../core/utils");

const riderUpdateprofileModel = async (data, res) => {
  try {
    const { riderEmail, country, riderid, phone, name, kin_name, kin_number } =
      data;

    const form = await RiderModel.findByIdAndUpdate(riderid, {
      $set: {
        country,
        email: riderEmail,
        phone,
        name,
        kin: { kin_name, kin_number },
      },
    });

    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const ridercheckprofileModel = async (data) => {
  try {
    const rider = await RiderModel.findById(data);
    if (
      !rider.photo ||
      !rider.vehicle.vehicle_number ||
      !rider.vehicle.vehicle_type ||
      !rider.kin.kin_number ||
      !rider.kin.kin_name
    ) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("error", error);
    return error.message;
    // return handleError(error)
  }
};

module.exports = {
  riderUpdateprofileModel,
  ridercheckprofileModel,
};
