const { createtopcategoryController, deletetopcategoryController, retrievetopcategoryController } = require("../controller/landingpage/topcategory");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const { createtopcategoryValidation } = require("../core/validation/landingpage");


const router = require("express").Router();

router.post(
  "/create/topcategory",
  admin_check_token,
  createtopcategoryValidation,
  createtopcategoryController
);
router.post(
  "/delete/topcategory",
  admin_check_token,
  createtopcategoryValidation,
  deletetopcategoryController
);
router.post(
  "/retrieve/topcategory",
  admin_check_token,
  adminValidation,
 retrievetopcategoryController
);

module.exports = router