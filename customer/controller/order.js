const {
  customeraddorderModel,
  customerretrieveallorderModel,
  customerretrievesingleorderModel,
  customerconfirmorderModel,
} = require("../model/order");

const customeraddorderController = async (req, res, next) => {
  const { customerid, delivery_fee, cart, price, shipping_address , delivery_vehicle  } = req.body;
  try {
    const data = {
      delivery_fee,
      cart,
      price,
      shipping_address,
      customerid, delivery_vehicle
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
