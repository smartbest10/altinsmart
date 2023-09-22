const {
  createcategoryController,
  updatecategoryController,
  retrievesinglecategoryController,
  retrieveallcategoryController,
} = require("../controller/category");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const {
  createcategoryValidation,
  updatecategoryValidation,
  retrievedeletecategoryValidation,
} = require("../core/validation/category");

const router = require("express").Router();

router.post(
  "/create/category",
  admin_check_token,
  createcategoryValidation,
  createcategoryController
);
router.post(
  "/update/category",
  admin_check_token,
  updatecategoryValidation,
  updatecategoryController
);
router.post(
  "/retrieve/single/category",
  admin_check_token,
  retrievedeletecategoryValidation,
retrievesinglecategoryController
);
router.post(
    "/retrieve/all/category",
    adminValidation,
  admin_check_token,
  retrieveallcategoryController,
);

module.exports = router;
