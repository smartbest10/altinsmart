const { riderwithdrawwalletController, riderwithdrawwallethistoryController } = require("../controller/wallet");
const { rider_check_token } = require("../core/authorization");
const { riderwithdrawwalletValidation, riderwallethistoryValidation } = require("../core/validation/wallet");



const router = require("express").Router();

router.post(
  "/withdraw/fund",
  riderwithdrawwalletValidation,
  rider_check_token,
  riderwithdrawwalletController
);

router.post(
  "/retrieve/withdraw/history",
  riderwallethistoryValidation,
  rider_check_token,
  riderwithdrawwallethistoryController
);

module.exports = router