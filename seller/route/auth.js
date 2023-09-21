const { SellerSignupController, SellerLoginController, SellerNewPasswordLink, SellerresetPassword } = require("../controller/auth");
const { sellersignupValidation, sellerLoginValidation, sellerforgotpasswordValidation, sellerResetpasswordValidation } = require("../core/validation/auth");


const router = require("express").Router();

router.post("/signup", sellersignupValidation, SellerSignupController);
router.post("/login", sellerLoginValidation, SellerLoginController);
router.post("/forgot/password", sellerforgotpasswordValidation, SellerNewPasswordLink);
router.post("/reset/password", sellerResetpasswordValidation, SellerresetPassword);




module.exports = router