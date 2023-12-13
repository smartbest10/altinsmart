const {
  CustomerSignupController, 
  CustomerLoginController,
  CustomerresetPassword,
  CustomerNewPasswordLink,
  mobilecustomerNewPasswordLink,
  mobilecustomerresetPassword,
} = require("../controller/auth");
const {
  customersignupValidation,
  customerLoginValidation,
  customerforgotpasswordValidation,
  customerResetpasswordValidation,
  mobilecustomerResetpasswordValidation,
} = require("../core/validation/auth");

const router = require("express").Router();

router.post("/signup", customersignupValidation, CustomerSignupController);
router.post("/login", customerLoginValidation, CustomerLoginController);
router.post(
  "/forgot/password",
  customerforgotpasswordValidation,
  CustomerNewPasswordLink
);
router.post(
  "/mobile/forgot/password",
  customerforgotpasswordValidation,
  mobilecustomerNewPasswordLink
);
router.post(
  "/mobile/reset/password",
    mobilecustomerResetpasswordValidation,
  mobilecustomerresetPassword
);
router.post(
  "/reset/password",
  customerResetpasswordValidation,
  CustomerresetPassword
);

module.exports = router;
