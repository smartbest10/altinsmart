const {
  CustomerupdateprofileController,
  CustomerupdatepasswordController,
  CustomerretrieveprofileController,
} = require("../controller/profile");
const { customer_check_token } = require("../core/authorization");
const {
  customerupdateprofileValidation,
  customerupdatepasswordValidation,
  customerretrieveprofileValidation,
} = require("../core/validation/profile");

const router = require("express").Router();

router.post(
  "/update/profile",
  customer_check_token,
  customerupdateprofileValidation,
  CustomerupdateprofileController
);
router.post(
  "/update/password",
  customer_check_token,
  customerupdatepasswordValidation,
  CustomerupdatepasswordController
);
router.post(
  "/retrieve/profile",
  customer_check_token,
  customerretrieveprofileValidation,
  CustomerretrieveprofileController
);

module.exports = router;
