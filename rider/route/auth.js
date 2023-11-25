const {
  riderSignupController,
  riderLoginController,
  riderNewPasswordLink,
  riderresetPassword,
  riderupdatevehicleController,
  riderupdatephotoController,
} = require("../controller/auth");
const { rider_check_token } = require("../core/authorization");
const {
  ridersignupValidation,
  riderLoginValidation,
  riderforgotpasswordValidation,
  riderResetpasswordValidation,
  riderupdatevehicleValidation,
  riderupdatephotoValidation,
} = require("../core/validation/auth");

const router = require("express").Router();

router.post("/signup", ridersignupValidation, riderSignupController);
router.post(
  "/auth/vehicleupdate",
    riderupdatevehicleValidation,
  rider_check_token,
  riderupdatevehicleController
);
router.post(
  "/auth/photoupdate",
    riderupdatephotoValidation,
    rider_check_token,
  riderupdatephotoController
);
router.post("/login", riderLoginValidation, riderLoginController);
router.post(
  "/forgot/password",
  riderforgotpasswordValidation,
  riderNewPasswordLink
);
router.post(
  "/reset/password",
  riderResetpasswordValidation,
  riderresetPassword
);

module.exports = router;
