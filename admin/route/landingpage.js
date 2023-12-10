const { adminaddfeatureshoController, admindeletefeaturedController, adminretrievefeaturedshopController, adminretrieveallfeaturedshopController } = require("../controller/landingpage/featuredshop");
const { adminaddflashsakeController, admindeleteflashsaleController, adminretrieveallflashsaleController, adminretrieveflashsaleController } = require("../controller/landingpage/flashsale");
const { createtopcategoryController, deletetopcategoryController, retrievetopcategoryController } = require("../controller/landingpage/topcategory");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const { createtopcategoryValidation, adminaddfeatureshopValidation, admindeletefeatureshopValidation, adminretrievesinglefeatureshopValidation, adminaddflashsaleValidation, admindeleteflashsaleValidation, adminretrievesingleflashsaleValidation } = require("../core/validation/landingpage");


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


router.post(
  "/add/featuredshop",
  admin_check_token,
  adminaddfeatureshopValidation,
 adminaddfeatureshoController
);
router.post(
  "/delete/featuredshop",
  admin_check_token,
  admindeletefeatureshopValidation,
 admindeletefeaturedController
);
router.post(
  "/retrieve/single/featuredshop",
  admin_check_token,
  adminretrievesinglefeatureshopValidation,
 adminretrievefeaturedshopController
);
router.post(
  "/retrieve/all/featuredshop",
  admin_check_token,
  adminValidation,
 adminretrieveallfeaturedshopController
);

router.post(
  "/add/flashsale",
  admin_check_token,
  adminaddflashsaleValidation,
 adminaddflashsakeController
);
router.post(
  "/delete/flashsale",
  admin_check_token,
  admindeleteflashsaleValidation,
 admindeleteflashsaleController
);
router.post(
  "/retrieve/single/flashsale",
  admin_check_token,
  adminretrievesingleflashsaleValidation,
 adminretrieveflashsaleController
);
router.post(
  "/retrieve/all/flashsale",
  adminValidation,
  admin_check_token,
 adminretrieveallflashsaleController
);

module.exports = router