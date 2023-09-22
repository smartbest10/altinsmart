const { admin_check_token } = require("../core/authorization");
const { approvebrandController } = require("../seller/controller/brand");
const { approvebrandValidation } = require("../seller/core/validation");

const router = require("express").Router();

router.post("/approve/brand", admin_check_token, approvebrandValidation, approvebrandController);

module.exports = router