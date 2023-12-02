const { customerordermodel } = require("../../../customer/core/db/order");
const { adminconfirmcustomerorderModel } = require("../model/order");

const adminretrieveallcustomerorderController = async (req, res, next) => {
  try {
    let trainee = await customerordermodel.find();
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
const adminretrievesinglecustomerorderController = async (req, res, next) => {
  const { orderid } = req.body;

  try {
    const data = { orderid };

    let trainee = await customerordermodel.findById(orderid);
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
const adminretrievecustomerorderController = async (req, res, next) => {
  const { customerid } = req.body;

  try {
    const data = { customerid };

    let trainee = await customerordermodel.find({ customerid });
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
const adminconfirmcustomerorderController = async (req, res, next) => {
  const { orderid, adminid } = req.body;

  try {
    const data = { orderid, adminid };

    let trainee = await adminconfirmcustomerorderModel(data, res);
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
  adminretrieveallcustomerorderController,
  adminretrievesinglecustomerorderController,
  adminconfirmcustomerorderController,
  adminretrievecustomerorderController,
};
