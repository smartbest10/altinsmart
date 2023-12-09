const { sellerWalletModel } = require("../core/db/wallet");
const { sellerwallethistoryModel } = require("../core/db/wallethistory");


const sellerwithdrawwalletModel = async (data, res) => {
  try {
    const { sellerid, walletid, amount, status , trx_type } = data;

    //add to wallet history
    const form = await new sellerwallethistoryModel({
      sellerid,
      walletid,
      status,
      amount, trx_type
    });
    await form.save();

    if (status) {
      await sellerWalletModel.findOneAndUpdate(
        { sellerid, _id: walletid },
        { $inc: { balance: -amount } }
      );
    }

    return "order";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


const sellerwalletfundhistoryModel = async (data, res) => {
  try {
    const { sellerid, walletid } = data;

    const wallethistory = await sellerwallethistoryModel.find({
      sellerid,
      walletid,
    });

    return wallethistory;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
    sellerwithdrawwalletModel ,
    sellerwalletfundhistoryModel
};
