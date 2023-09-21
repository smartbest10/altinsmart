const { AdminSignupController, AdminLoginController, AdminNewPasswordLink, AdminresetPassword } = require("../controller/auth");
const { adminsignupValidation, adminLoginValidation, adminforgotpasswordValidation, adminResetpasswordValidation } = require("../core/validation/auth");


const router = require("express").Router();

router.post("/signup", adminsignupValidation, AdminSignupController);
router.post("/login",  adminLoginValidation, AdminLoginController);
router.post("/forgot/password", adminforgotpasswordValidation, AdminNewPasswordLink);
router.post("/reset/password", adminResetpasswordValidation, AdminresetPassword);




module.exports = router