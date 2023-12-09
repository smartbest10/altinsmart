const { customerordermodel } = require("../../customer/core/db/order");
const { ordercodemodel } = require("../../customer/core/db/order_code");
const { dispatchordermodel } = require("../core/db/dispatch_order");
const { dispatchlistmodel } = require("../core/db/order");
const { RiderModel } = require("../core/db/rider");
const { handleError } = require("../core/utils");
const {
  rideractivateneworderModel,
  riderpickuporderModel,
  riderconfirmorderdeliveryModel,
} = require("../model/order");
const { ridercheckprofileModel } = require("../model/profile");

const riderretrievecustomerorderController = async (req, res, next) => {
  try {
    let trainee = await dispatchlistmodel.find({ order_taken: false });
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
const riderretrieveallorderController = async (req, res, next) => {
  try {
    const { riderid } = req.body;
    let trainee = await dispatchordermodel.find({ riderid });
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
const riderretrievesingleorderController = async (req, res, next) => {
  try {
    const { orderid } = req.body;
    let trainee = await dispatchordermodel.findById(orderid);
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
const rideractivateorderController = async (req, res, next) => {
  const { orderid, riderid } = req.body;
   //note orderid == customerorderid
  try {
    //check rider profile
    const riderprofile = await ridercheckprofileModel(riderid)
    if (!riderprofile) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "please complete your profile to claim orders",
      });
    }
    //
    const order = await customerordermodel.findById(orderid)

    const ordervehicle = order.delivery_vehicle
    const rider = await RiderModel.findById(riderid)
    const ridervehicle = rider.vehicle.vehicle_type
    if (ridervehicle !== ordervehicle) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "dispatch vehicle not sufficient for order",
      });
    }
    const data = { orderid, riderid };

    let trainee = await rideractivateneworderModel(data, res);
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
const riderpickuporderController = async (req, res, next) => {
  const { orderid, riderid } = req.body;
//note orderid == customerorderid
  try {
    const data = { orderid, riderid };

    let trainee = await riderpickuporderModel(data, res);
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
const riderconfirmorderdeliveryController = async (req, res, next) => {
  const { ordercode, riderid } = req.body;

  try {
    const data = { ordercode, riderid };

    let trainee = await riderconfirmorderdeliveryModel(data, res);
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
  riderretrievecustomerorderController,
  rideractivateorderController,
  riderpickuporderController,
  riderconfirmorderdeliveryController,
  riderretrievesingleorderController,riderretrieveallorderController
};
