const { createProductController, updateProductController, retrievesellerProductController } = require("../controller/product");
const { createProductValidation, updateProductValidation, retrievesellerproductValidation } = require("../core/validation/product");


const router = require("express").Router();

router.post("/create/product", createProductValidation , createProductController);
router.post("/update/product", updateProductValidation , updateProductController);
router.post("/retrieve/product", retrievesellerproductValidation, retrievesellerProductController);





module.exports = router