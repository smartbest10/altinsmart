const {
  customerfundwalletModel,
  customerfundwallethistoryModel,
} = require("../model/wallet");

const CustomerfundwalletController = async (req, res, next) => {
  const { customerid, walletid, amount, status , trx_type } = req.body;
  try {
    const data = {
      customerid,
      walletid,
      amount,
      status, trx_type
    };
    let comment = await customerfundwalletModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const CustomerfundwallethistoryController = async (req, res, next) => {
  const { customerid, walletid } = req.body;
  try {
    const data = {
      customerid,
      walletid,
    };
    let comment = await customerfundwallethistoryModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  CustomerfundwallethistoryController,
  CustomerfundwalletController,
};
