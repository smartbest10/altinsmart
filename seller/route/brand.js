const { createBrandController, retrieveallBrandController } = require("../controller/brand");
const { seller_check_token } = require("../core/authorization");
const { createbrandValidation, retrievesellerbrandValidation } = require("../core/validation/brand");


const router = require("express").Router();

router.post("/create/brand", createbrandValidation , seller_check_token,   createBrandController);
router.post("/retrieve/brand", retrievesellerbrandValidation , seller_check_token,   retrieveallBrandController);

module.exports = router