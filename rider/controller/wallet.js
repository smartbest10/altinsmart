const { riderWalletModel } = require("../core/db/wallet");
const { riderwithdrawwalletModel, riderwalletfundhistoryModel } = require("../model/wallet");

  
  const riderwithdrawwalletController = async (req, res, next) => {
    const { riderid, walletid, amount, status , trx_type } = req.body;
      try {
              //check if the rider balance is enough
    const wallet = await riderWalletModel.findOne({ riderid })
    const balance = wallet.balance
    if (amount > balance) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "insufficient fund",
        });
      }
      const data = {
        riderid,
        walletid,
        amount,
        status, trx_type
      };
      let comment = await riderwithdrawwalletModel(data, res);
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
  
  const riderwithdrawwallethistoryController = async (req, res, next) => {
    const { riderid, walletid } = req.body;
      try {
        
      const data = {
        riderid,
        walletid,
      };
      let comment = await riderwalletfundhistoryModel(data, res);
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
    riderwithdrawwalletController , riderwithdrawwallethistoryController
  };
  