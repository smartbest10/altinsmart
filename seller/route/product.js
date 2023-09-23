const { createProductController, updateProductController, retrievesellerProductController, sellerRetrievecategoryController, sellerRetrieveorinalcategoryController } = require("../controller/product");
const { sellerValidation } = require("../core/validation/auth");
const { createProductValidation, updateProductValidation, retrievesellerproductValidation } = require("../core/validation/product");


const router = require("express").Router();

router.post("/create/product", createProductValidation , createProductController);
router.post("/update/product", updateProductValidation , updateProductController);
router.post("/retrieve/product", retrievesellerproductValidation, retrievesellerProductController);
router.post("/retrieve/category", sellerValidation, sellerRetrievecategoryController);
router.post("/retrieve/original/category", sellerValidation, sellerRetrieveorinalcategoryController);





module.exports = router