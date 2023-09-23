const { approveproductController, retrievesingleproductController, retrieveapproveproductController, retrieveunapproveproductController, retrieveallproductController } = require("../controller/product");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const {
  approveproductValidation,
  retrievesingleproductValidation,
} = require("../core/validation/product");
const { approvebrandController } = require("../seller/controller/brand");
const { approvebrandValidation } = require("../seller/core/validation");

const router = require("express").Router();

//for brand
router.post(
  "/approve/brand",
  admin_check_token,
  approvebrandValidation,
  approvebrandController
);

//for product
router.post(
  "/approve/product",
  admin_check_token,
  approveproductValidation,
  approveproductController
);
router.get(
  "/retrieve/single/product",
  admin_check_token,
  retrievesingleproductValidation,
  retrievesingleproductController
);
router.get(
  "/retrieve/approved/product",
  admin_check_token,
  adminValidation,
  retrieveapproveproductController
);
router.get(
  "/retrieve/unapproved/product",
  admin_check_token,
  adminValidation,
  retrieveunapproveproductController
);
router.get(
  "/retrieve/all/product",
  admin_check_token,
  adminValidation,
  retrieveallproductController
);

module.exports = router;
