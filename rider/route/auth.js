const { CustomerSignupController, CustomerLoginController, CustomerresetPassword, CustomerNewPasswordLink } = require("../controller/auth");
const { customersignupValidation, customerLoginValidation, customerforgotpasswordValidation, customerResetpasswordValidation } = require("../core/validation/auth");


const router = require("express").Router();

router.post("/signup", customersignupValidation, CustomerSignupController);
router.post("/login", customerLoginValidation, CustomerLoginController);
router.post("/forgot/password", customerforgotpasswordValidation, CustomerNewPasswordLink);
router.post("/reset/password", customerResetpasswordValidation, CustomerresetPassword);




module.exports = router