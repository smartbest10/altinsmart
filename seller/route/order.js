const { sellerriderchatController, sellerretrieveridersController, sellersupportController } = require("../controller/chat");
const { sellerretrievesingleorderController, sellerretrieveallorderController } = require("../controller/order");
const { seller_check_token } = require("../core/authorization");
const { sellerValidation } = require("../core/validation/auth");
const { sellerorderValidation } = require("../core/validation/order");


const router = require("express").Router();

router.post(
    "/retrieve/single/order",
    sellerorderValidation,
    seller_check_token,
    sellerretrievesingleorderController
);
router.post(
    "/retrieve/all/order",
    sellerValidation,
    seller_check_token,
    sellerretrieveallorderController
);

router.post(
    "/retrieve/chat",
sellerValidation,
    seller_check_token,
    sellerriderchatController
  )
  router.post(
    "/retrieve/rider",
    sellerValidation,
    seller_check_token,
    sellerretrieveridersController
  )
  router.post(
    "/support/chat",
    sellerValidation,
    seller_check_token,
    sellersupportController
  )

module.exports = router