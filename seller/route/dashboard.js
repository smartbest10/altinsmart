const { SellerdashboardController, SellerretrievereviewController, SellerretrievequeryController } = require("../controller/dashboard");
const { seller_check_token } = require("../core/authorization");
const { sellerValidation } = require("../core/validation/auth");


const router = require("express").Router();

router.post(
    "/dashboard",
    sellerValidation,
  seller_check_token ,
  SellerdashboardController,
);
router.post(
    "/review",
    sellerValidation,
  seller_check_token ,
  SellerretrievereviewController
);
router.post(
    "/query",
    sellerValidation,
  seller_check_token ,
  SellerretrievequeryController
);

module.exports = router