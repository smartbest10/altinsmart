const { WalletModel } = require("../core/db/wallet");
const { wallethistoryModel } = require("../core/db/wallethistory");

const customerfundwalletModel = async (data, res) => {
  try {
    const { customerid, walletid, amount, status , trx_type } = data;

    //add to wallet history
    const form = await new wallethistoryModel({
      customerid,
      walletid,
      status,
      amount, trx_type
    });
    await form.save();

    if (status) {
      await WalletModel.findOneAndUpdate(
        { customerid, _id: walletid },
        { $inc: { balance: amount } }
      );
    }

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


const customerfundwallethistoryModel = async (data, res) => {
  try {
    const { customerid, walletid } = data;

    const wallethistory = await wallethistoryModel.find({
      customerid,
      walletid,
    });

    return wallethistory;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  customerfundwallethistoryModel,
  customerfundwalletModel,
};
