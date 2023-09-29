const { retrievetopcatgeriesController, subscribemailnotificationController, retrievefeaturedshopController } = require("../controller/landingpage");
const { CustomerretrieveallbrandController, CustomerretrieveallcategoryController, CustomerretrieveallproductController, CustomerretrievesingleproductController } = require("../controller/productrleated");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const { customerretrievesingleproductValidation } = require("../core/validation/productrelated.validation");
const { customeremailsubscriptionValidation } = require("../core/validation/profile");


const router = require("express").Router();

router.post(
  "/retrieve/topcategory",
  retrievetopcatgeriesController
);
router.post(
  "/retrieve/featuredshop",
  retrievefeaturedshopController
);
router.post(
  "/retrieve/topcategory",
  retrievetopcatgeriesController
);

router.post(
    "/subscribe/email",
    customeremailsubscriptionValidation,
  subscribemailnotificationController
);

//for un authorised access
router.post(
    "/retrieve/brand",
    CustomerretrieveallbrandController
  
);
router.post(
    "/retrieve/category",
    CustomerretrieveallcategoryController
  
);
router.post(
    "/retrieve/product",
    CustomerretrieveallproductController
);
router.post(
    "/retrieve/single/product",
    customerretrievesingleproductValidation,
    CustomerretrievesingleproductController
);


module.exports = router