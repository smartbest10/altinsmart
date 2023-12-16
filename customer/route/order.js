const { CustomerriderchatController, CustomerretrieveridersController } = require("../controller/chat");
const { customeraddorderController, customerretrieveallordercontroller, customerretrievesingleordercontroller, customerconfirmordercontroller } = require("../controller/order");
const { CustomerallordercodeController, CustomersingleordercodeController } = require("../controller/order_code");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const { customercreateordervalidation, customerordervalidation } = require("../core/validation/order");


const router = require("express").Router();

router.post(
  "/create/order",
  customer_check_token,
  customercreateordervalidation,
  customeraddorderController
);
router.post(
  "/retrive/all/customer/order",
  customerValidation,
  customer_check_token,
  customerretrieveallordercontroller
);
router.post(
  "/retrive/single/customer/order",
  customerordervalidation,
  customer_check_token,
  customerretrievesingleordercontroller
);
router.post(
  "/customer/confirm/order",
  customerordervalidation,
  customer_check_token,
  customerconfirmordercontroller
);

//order code
router.post(
  "/all/ordercode",
  customerValidation,
  customer_check_token,
  CustomerallordercodeController
);
router.post(
  "/single/ordercode",
  customerordervalidation,
  customer_check_token,
  CustomersingleordercodeController
);

//chat
router.post(
  "/retrieve/chat",
  customerValidation,
  customer_check_token,
  CustomerriderchatController
)
router.post(
  "/retrieve/rider",
  customerValidation,
  customer_check_token,
  CustomerretrieveridersController
)
module.exports = router