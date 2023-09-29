const {
  createProductController,
  updateProductController,
  retrievesellerProductController,
  sellerRetrievecategoryController,
  sellerRetrieveorinalcategoryController,
  sellerRetrievebrandController,
  sellerRetrieveorinalbrandController,
  retrievesellersingleProductController,
} = require("../controller/product");
const { seller_check_token } = require("../core/authorization");
const { sellerValidation } = require("../core/validation/auth");
const {
  createProductValidation,
  updateProductValidation,
  retrievesellerproductValidation,
  retrievesellersingleproductValidation,
} = require("../core/validation/product");

const router = require("express").Router();

router.post(
  "/create/product",
  createProductValidation,
  createProductController
);
router.post(
  "/update/product",
  updateProductValidation,
  updateProductController
);
router.post(
  "/retrieve/product",
    sellerValidation,
  seller_check_token,
  retrievesellerProductController
);
router.post(
  "/retrieve/single/product",
  retrievesellersingleproductValidation ,
  seller_check_token,
  retrievesellersingleProductController
);
router.post(
  "/retrieve/category",
  sellerValidation,
  sellerRetrievecategoryController
);
router.post(
  "/retrieve/original/category",
  sellerValidation,
  sellerRetrieveorinalcategoryController
);
router.post(
  "/retrieve/brand",
  sellerValidation,
  seller_check_token,
  sellerRetrievebrandController
);
router.post(
  "/retrieve/original/brand",
  sellerValidation,
  seller_check_token,
  sellerRetrieveorinalbrandController
);

module.exports = router;
