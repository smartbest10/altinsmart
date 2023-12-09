const {
  CustomerfundwalletController,
  CustomerfundwallethistoryController,
} = require("../controller/wallet");
const { customer_check_token } = require("../core/authorization");
const {
  customerfundwalletvalidation,
  customerfundwallethistoryvalidation,
} = require("../core/validation/wallet");

const router = require("express").Router();

router.post(
  "/fund/wallet",
  customerfundwalletvalidation,
  customer_check_token,
  CustomerfundwalletController
);

router.post(
  "/retrieve/wallet/history",
  customerfundwallethistoryvalidation,
  customer_check_token,
  CustomerfundwallethistoryController
);

module.exports = router