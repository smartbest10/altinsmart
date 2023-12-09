const { riderWalletModel } = require("../core/db/wallet");
const { riderwallethistoryModel } = require("../core/db/wallethistory");



const riderwithdrawwalletModel = async (data, res) => {
  try {
    const { riderid, walletid, amount, status , trx_type } = data;

    //add to wallet history
    const form = await new riderwallethistoryModel({
      riderid,
      walletid,
      status,
      amount, trx_type
    });
    await form.save();

    if (status) {
      await riderWalletModel.findOneAndUpdate(
        {  riderid, _id: walletid },
        { $inc: { balance: -amount } }
      );
    }

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


const riderwalletfundhistoryModel = async (data, res) => {
  try {
    const { riderid, walletid } = data;

    const wallethistory = await riderwallethistoryModel.find({
      riderid,
      walletid,
    });

    return wallethistory;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
    riderwithdrawwalletModel ,
    riderwalletfundhistoryModel
};
