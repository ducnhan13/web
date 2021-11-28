const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterController");

router.get("/", RegisterController.renderRegister);
router.post("/", RegisterController.sendInfo);

module.exports = router;
