const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const {
  adminretrievecustomerorderController,
  adminretrieveallcustomerorderController,
  adminretrievesinglecustomerorderController,
  adminconfirmcustomerorderController,
} = require("../customer/controller/order");
const {
  adminretrievecustomerorderValidation,
  admincustomerorderValidation,
} = require("../customer/core/validation");

const router = require("express").Router();

//order
router.post(
  "/retrieve/customer/order",
  admin_check_token,
  adminretrievecustomerorderValidation,
  adminretrievecustomerorderController
);
router.post(
  "/retrieve/all/customer/order",
  admin_check_token,
  adminValidation,
  adminretrieveallcustomerorderController
);
router.post(
  "/retrieve/single/customer/order",
  admin_check_token,
  admincustomerorderValidation,
  adminretrievesinglecustomerorderController
);

router.post(
  "/confirm/customer/order",
  admin_check_token,
  admincustomerorderValidation,
  adminconfirmcustomerorderController
);

module.exports = router;
