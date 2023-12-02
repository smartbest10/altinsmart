const { riderretrievecustomerorderController, riderretrieveallorderController, riderretrievesingleorderController, rideractivateorderController, riderpickuporderController, riderconfirmorderdeliveryController } = require("../controller/order");
const { rider_check_token } = require("../core/authorization");
const { riderValidation } = require("../core/validation/auth");
const { riderorderValidation, riderconfirmdeliveryValidation } = require("../core/validation/order");


const router = require("express").Router();

router.post(
  "/customer/list/order",
    riderValidation,
  rider_check_token,
  riderretrievecustomerorderController
);

router.post(
  "/dispatch/order",
    riderValidation,
  rider_check_token,
  riderretrieveallorderController
);

router.post(
  "/single/dispatch",
    riderorderValidation,
  rider_check_token,
  riderretrievesingleorderController
);
router.post(
  "/claim/order",
    riderorderValidation,
  rider_check_token,
  rideractivateorderController
);
router.post(
  "/pickup/order",
    riderorderValidation,
  rider_check_token,
  riderpickuporderController
);
router.post(
  "/confirm/delivery",
    riderconfirmdeliveryValidation,
  rider_check_token,
  riderconfirmorderdeliveryController
);

module.exports = router