const { Sellerupdateprofile1Controller, Sellerupdateprofile2Controller, Sellerupdateprofile3Controller, SellerupdatephotoController, SelleraddsocialaccountController, SelleraddcategoryController } = require("../controller/profile");
const { seller_check_token } = require("../core/authorization");
const {
  sellerupdateprofile1Validation, sellerupdateprofile2Validation, sellerupdateprofile3Validation, sellerupdatephotoValidation, selleraddaccountValidation, selleraddcategoryValidation,
} = require("../core/validation/profile");

const router = require("express").Router();

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
  "/update/addcategory",
  seller_check_token,
  selleraddcategoryValidation,
  SelleraddcategoryController
);

module.exports = router;
