const {
  retrieveallcategoryproductValidation,
  retrieveallsellerproductValidation,
} = require("../../admin/core/validation/landingpage");
const {
  retrievetopcatgeriesController,
  subscribemailnotificationController,
  retrievefeaturedshopController,
  userretrievecategoryController,
  userretrieveallbrandController,
  userretrieveflashsalesController,
  retrievetodaydealsController,
} = require("../controller/landingpage");
const {
  CustomerretrieveallbrandController,
  CustomerretrieveallcategoryController,
  CustomerretrievesingleproductController,
  customerretrievecategoryproductController,
  customerretrievesellerproductController,
  userproductnamesearchController,
  userproductnameController,
} = require("../controller/productrleated");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const {
  customerretrievesingleproductValidation, customersearchproductValidation,
} = require("../core/validation/productrelated.validation");
const {
  customeremailsubscriptionValidation,
} = require("../core/validation/profile");

const router = require("express").Router();

router.post("/retrieve/topcategory", retrievetopcatgeriesController);
router.post("/retrieve/featuredshop", retrievefeaturedshopController);
router.post("/retrieve/category", userretrievecategoryController);
router.post("/retrieve/brand", userretrieveallbrandController);
router.post("/retrieve/flashsale", userretrieveflashsalesController);

router.post(
  "/subscribe/email",
  customeremailsubscriptionValidation,
  subscribemailnotificationController
);
router.post(
  "/search/product",
  customersearchproductValidation,
 userproductnamesearchController
);
router.post(
  "/search/name",
  customersearchproductValidation,
 userproductnameController
);

//for un authorised access
router.post("/retrieve/brand", CustomerretrieveallbrandController);
router.post("/retrieve/today/deal", retrievetodaydealsController);
router.post("/retrieve/category", CustomerretrieveallcategoryController);
router.post(
  "/retrieve/category/product",
  retrieveallcategoryproductValidation,
  customerretrievecategoryproductController
);
router.post(
  "/retrieve/seller/product",
  retrieveallsellerproductValidation,
  customerretrievesellerproductController
);
router.post(
  "/retrieve/single/product",
  customerretrievesingleproductValidation,
  CustomerretrievesingleproductController
);

module.exports = router;
