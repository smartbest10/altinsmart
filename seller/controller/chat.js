const { RiderModel } = require("../../rider/core/db/rider");
const { sellerdispatchModel } = require("../core/db/chat");
const { sellersupporthModel } = require("../core/db/support");


const sellerretrieveridersController = async (req, res, next) => {
  try {
    let comment = await RiderModel.find().select("name photo");
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "seller successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const sellerriderchatController = async (req, res, next) => {
  try {
    const { sellerid } = req.body;
    let comment = await sellerdispatchModel.find({
      users: {
        $in: sellerid,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "seller successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const sellersupportController = async (req, res, next) => {
  try {
    const { sellerid } = req.body;
    let comment = await sellersupporthModel.find({ sellerid });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "seller successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  sellerriderchatController,
  sellerretrieveridersController,
  sellersupportController,
};
