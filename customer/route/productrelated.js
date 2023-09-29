const { customerfollowstoreController, customerunfollowstoreController, customerretrievefollowedstoreController } = require("../controller/featurestore");
const { CustomerreviewproductController } = require("../controller/productrleated");
const { customeraddwishlistController, customerremovewishlistController, customerretrieveishlistController } = require("../controller/wishlist");
const { customer_check_token } = require("../core/authorization");
const { customerValidation } = require("../core/validation/auth");
const { customercreateproductreviewValidation, customeraddwishlistValidation, customerfollowstoreValidation } = require("../core/validation/productrelated.validation");


const router = require("express").Router();

router.post(
  "/product/review",
  customer_check_token,
  customercreateproductreviewValidation,
 CustomerreviewproductController
);

//wishlist
router.post(
    "/add/wishlist",
    customer_check_token,
    customeraddwishlistValidation,
   customeraddwishlistController
  );
router.post(
    "/remove/wishlist",
    customer_check_token,
    customeraddwishlistValidation,
   customerremovewishlistController
  );
router.post(
    "/retrieve/wishlist",
    customer_check_token,
    customerValidation,
   customerretrieveishlistController
  );
  
//followstore
router.post(
    "/follow/store",
    customer_check_token,
    customerfollowstoreValidation,
   customerfollowstoreController
  );
router.post(
    "/unfollow/store",
    customer_check_token,
    customerfollowstoreValidation,
   customerunfollowstoreController
  );

router.post(
    "/retrieve/followedstore",
    customer_check_token,
    customerValidation,
   customerretrievefollowedstoreController
);
  

  
module.exports = router