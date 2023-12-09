const { WalletModel } = require("../core/db/wallet");
const {
  customeraddorderModel,
  customerretrieveallorderModel,
  customerretrievesingleorderModel,
  customerconfirmorderModel,
} = require("../model/order");

const customeraddorderController = async (req, res, next) => {
  const {
    customerid,
    delivery_fee,
    cart,
    price,
    shipping_address,
    delivery_vehicle,
    use_wallet,
  } = req.body;
  try {
    //check if the customer balance is enough
    const wallet = await WalletModel.findOne({ customerid })
    const balance = wallet.balance
    if (use_wallet) {
      if (price > balance) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "insufficient fund",
        });
      }
    }
    const data = {
      delivery_fee,
      cart,
      price,
      shipping_address,
      customerid,
      delivery_vehicle,
      use_wallet,
    };

    let trainee = await customeraddorderModel(data, res);
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
const customerretrieveallordercontroller = async (req, res, next) => {
  const { customerid } = req.body;
  try {
    const data = { customerid };

    let trainee = await customerretrieveallorderModel(data, res);
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
const customerretrievesingleordercontroller = async (req, res, next) => {
  const { orderid } = req.body;
  try {
    const data = { orderid };

    let trainee = await customerretrievesingleorderModel(data, res);
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
const customerconfirmordercontroller = async (req, res, next) => {
  const { orderid } = req.body;
  try {
    const data = { orderid };

    let trainee = await customerconfirmorderModel(data, res);
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
  customeraddorderController,
  customerretrieveallordercontroller,
  customerconfirmordercontroller,
  customerretrievesingleordercontroller,
};
