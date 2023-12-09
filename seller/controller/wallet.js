const { sellerWalletModel } = require("../core/db/wallet");
const { handleError } = require("../core/utils");
const { sellerwithdrawwalletModel, sellerwallethistoryModel, sellerwalletfundhistoryModel } = require("../model/wallet");

  
  const sellerwithdrawwalletController = async (req, res, next) => {
    const { sellerid, walletid, amount, status , trx_type } = req.body;
      try {
              //check if the seller balance is enough
    const wallet = await sellerWalletModel.findOne({ sellerid })
    const balance = wallet.balance
    if (amount > balance) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "insufficient fund",
        });
      }
      const data = {
        sellerid,
        walletid,
        amount,
        status,  trx_type
      };
      let comment = await sellerwithdrawwalletModel(data, res);
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
  
  const sellerwithdrawwallethistoryController = async (req, res, next) => {
    const { sellerid, walletid } = req.body;
      try {
        
      const data = {
        sellerid,
        walletid,
      };
      let comment = await sellerwalletfundhistoryModel(data, res);
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
    sellerwithdrawwalletController , sellerwithdrawwallethistoryController
  };
  