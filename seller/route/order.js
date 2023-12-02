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

module.exports = router