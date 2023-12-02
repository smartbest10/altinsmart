const { sellerordermodel } = require("../../../seller/core/db/order");
const { adminconfirmsellerorderModel } = require("../model/order");

const adminretrieveallsellerorderController = async (req, res, next) => {
  try {
    let trainee = await sellerordermodel.find();
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
const adminretrievesinglesellerorderController = async (req, res, next) => {
  const { orderid } = req.body;

  try {
    const data = { orderid };

    let trainee = await sellerordermodel.findById(orderid);
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
const adminretrievesellerorderController = async (req, res, next) => {
  const { sellerid } = req.body;

  try {
    const data = { sellerid };

    let trainee = await sellerordermodel.find({ sellerid });
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
const adminconfirmsellerorderController = async (req, res, next) => {
  const { orderid, adminid } = req.body;

  try {
    const data = { orderid, adminid };

    let trainee = await adminconfirmsellerorderModel(data, res);
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
  adminretrieveallsellerorderController,
  adminretrievesinglesellerorderController,
  adminconfirmsellerorderController,
  adminretrievesellerorderController,
};
