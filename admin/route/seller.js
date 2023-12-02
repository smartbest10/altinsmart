const { approveproductController, retrievesingleproductController, retrieveapproveproductController, retrieveunapproveproductController, retrieveallproductController } = require("../controller/product");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const {
  approveproductValidation,
  retrievesingleproductValidation,
} = require("../core/validation/product");
const { approvebrandController } = require("../seller/controller/brand");
const { adminretrievesellerorderController, adminretrieveallsellerorderController, adminretrievesinglesellerorderController, adminconfirmsellerorderController } = require("../seller/controller/order");
const { approvebrandValidation, adminretrievesellerorderValidation, adminsellerorderValidation } = require("../seller/core/validation");

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
router.post(
  "/retrieve/single/product",
  admin_check_token,
  retrievesingleproductValidation,
  retrievesingleproductController
);
router.post(
  "/retrieve/approved/product",
  admin_check_token,
  adminValidation,
  retrieveapproveproductController
);
router.post(
  "/retrieve/unapproved/product",
  admin_check_token,
  adminValidation,
  retrieveunapproveproductController
);
router.post(
  "/retrieve/all/product",
  admin_check_token,
  adminValidation,
  retrieveallproductController
);


//order
router.post(
  "/retrieve/seller/order",
  admin_check_token,
  adminretrievesellerorderValidation,
  adminretrievesellerorderController
);
router.post(
  "/retrieve/all/seller/order",
  admin_check_token,
  adminValidation,
  adminretrieveallsellerorderController
);
router.post(
  "/retrieve/single/seller/order",
  admin_check_token,
  adminsellerorderValidation,
  adminretrievesinglesellerorderController
);
// router.post(
//   "/retrieve/single/seller/order",
//   admin_check_token,
//   adminsellerorderValidation,
//   adminretrievesinglesellerorderController
// );
router.post(
  "/confirm/seller/order",
  admin_check_token,
  adminsellerorderValidation,
  adminconfirmsellerorderController
);

module.exports = router;
