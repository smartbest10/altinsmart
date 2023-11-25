const { CustomerretrievesingleaddressController } = require("../controller/address");
const { CustomercreatecardController, CustomerupdatecardController, CustomerdeletecardController, CustomerretrieveallcardController } = require("../controller/card");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const { customercreatecardValidation, customerretrievedeletecardValidation } = require("../core/validation/card");


const router = require("express").Router();

router.post(
  "/create/card",
  customer_check_token,
  customercreatecardValidation,
  CustomercreatecardController
);

router.post(
  "/update/card",
  customer_check_token,
  CustomerupdatecardController,
  CustomerupdatecardController
);
router.post(
    "/delete/card",
    customerretrievedeletecardValidation,
  customer_check_token,
  CustomerdeletecardController
);
router.post(
    "/retrieve/single/card",
    customerretrievedeletecardValidation,
  customer_check_token,
  CustomerretrievesingleaddressController
);
router.post(
    "/retrieve/all/card",
    customerValidation,
  customer_check_token,
  CustomerretrieveallcardController
);

module.exports = router