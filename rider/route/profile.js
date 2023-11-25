const { riderupdateprofileController, riderretrieveprofileController } = require("../controller/profile");
const { rider_check_token } = require("../core/authorization");
const { riderupdateprofileValidation, riderValidation } = require("../core/validation/auth");
const router = require("express").Router();

router.post(
  "/update/profile",
    riderupdateprofileValidation,
  rider_check_token,
  riderupdateprofileController
);
router.post(
  "/retrieve/profile",
    riderValidation,
  rider_check_token,
  riderretrieveprofileController
);

module.exports = router;
