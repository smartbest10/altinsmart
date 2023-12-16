const { customerdispatchModel } = require("../../customer/core/db/chat");
const { CustomerModel } = require("../../customer/core/db/customer");
const { sellerdispatchModel } = require("../../seller/core/db/chat");
const { SellerModel } = require("../../seller/core/db/seller");
const { ridersupporthModel } = require("../core/db/support");



const riderretrievesellerController = async (req, res, next) => {
  try {
    let comment = await SellerModel.find().select("name photo");
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "rider successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const riderretrievecustomerController = async (req, res, next) => {
  try {
    let comment = await CustomerModel.find().select("name photo");
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "rider successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const ridersellerchatController = async (req, res, next) => {
  try {
    const { riderid } = req.body;
    let comment = await sellerdispatchModel.find({
      users: {
        $in: riderid,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "rider successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const ridercustomerchatController = async (req, res, next) => {
  try {
    const { riderid } = req.body;
    let comment = await customerdispatchModel.find({
      users: {
        $in: riderid,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "rider successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const ridersupportController = async (req, res, next) => {
  try {
    const { riderid } = req.body;
    let comment = await ridersupporthModel.find({ riderid });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "rider successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
    ridercustomerchatController,
    ridersellerchatController,
  riderretrievesellerController,
  riderretrievecustomerController,
  ridersupportController,
};
