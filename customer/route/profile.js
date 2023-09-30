const {
  CustomerupdateprofileController,
  CustomerupdatepasswordController,
  CustomerretrieveprofileController,
  CustomerupdatephotoController,
} = require("../controller/profile");
const { customer_check_token } = require("../core/authorization");
const {
  customerupdateprofileValidation,
  customerupdatepasswordValidation,
  customerretrieveprofileValidation,
  customerupdatephotoValidation,
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
router.post(
  "/update/photo",
  customer_check_token,
  customerupdatephotoValidation,
  CustomerupdatephotoController
);

module.exports = router;
