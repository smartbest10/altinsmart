const { sellerwithdrawwalletController, sellerwithdrawwallethistoryController } = require("../controller/wallet");
const { seller_check_token } = require("../core/authorization");
const { sellerwithdrawwalletValidation, sellerwallethistoryValidation } = require("../core/validation/wallet");


const router = require("express").Router();

router.post(
  "/withdraw/fund",
  sellerwithdrawwalletValidation,
  seller_check_token,
  sellerwithdrawwalletController
);

router.post(
  "/retrieve/withdraw/history",
  sellerwallethistoryValidation,
  seller_check_token,
  sellerwithdrawwallethistoryController
);

module.exports = router