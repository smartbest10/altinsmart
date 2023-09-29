const { Sellerupdateprofile1Controller, Sellerupdateprofile2Controller, Sellerupdateprofile3Controller, SellerupdatephotoController, SelleraddsocialaccountController, SelleraddcategoryController, SelleraddbrandController, SellerremovesocialaccountController, SellerretrieveprofileController } = require("../controller/profile");
const { seller_check_token } = require("../core/authorization");
const { sellerValidation } = require("../core/validation/auth");
const {
  sellerupdateprofile1Validation, sellerupdateprofile2Validation, sellerupdateprofile3Validation, sellerupdatephotoValidation, selleraddaccountValidation, selleraddcategoryValidation, selleraddbrandValidation, sellerremoveaccountValidation,
} = require("../core/validation/profile");

const router = require("express").Router();

router.post(
  "/retrieve/profile",
  seller_check_token,
  sellerValidation,
  SellerretrieveprofileController
);
router.post(
  "/update/profile1",
  seller_check_token,
  sellerupdateprofile1Validation,
  Sellerupdateprofile1Controller
);
router.post(
  "/update/profile2",
  seller_check_token,
  sellerupdateprofile2Validation,
  Sellerupdateprofile2Controller
);
router.post(
  "/update/profile3",
  seller_check_token,
  sellerupdateprofile3Validation,
  Sellerupdateprofile3Controller
);
router.post(
  "/update/photo",
  seller_check_token,
  sellerupdatephotoValidation,
  SellerupdatephotoController
);
router.post(
  "/update/addacount",
  seller_check_token,
  selleraddaccountValidation,
  SelleraddsocialaccountController
);
router.post(
  "/update/removeacount",
  seller_check_token,
  sellerremoveaccountValidation,
  SellerremovesocialaccountController
);
router.post(
  "/update/addcategory",
  seller_check_token,
  selleraddcategoryValidation,
  SelleraddcategoryController
);
router.post(
  "/update/addbrand",
  seller_check_token,
  selleraddbrandValidation,
  SelleraddbrandController
);


module.exports = router;
