const { retrievetopcatgeriesController, subscribemailnotificationController, retrievefeaturedshopController } = require("../controller/landingpage");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const { customeremailsubscriptionValidation } = require("../core/validation/profile");


const router = require("express").Router();

router.post(
  "/retrieve/topcategory",
  customer_check_token,
  customerValidation,
  retrievetopcatgeriesController
);
router.post(
  "/retrieve/featuredshop",
  customer_check_token,
  customerValidation,
  retrievefeaturedshopController
);
router.post(
  "/retrieve/topcategory",
  customer_check_token,
  customerValidation,
  retrievetopcatgeriesController
);

router.post(
    "/subscribe/email",
    customeremailsubscriptionValidation,
  subscribemailnotificationController
);

module.exports = router