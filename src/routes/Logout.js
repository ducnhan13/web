const express = require("express");
const router = express.Router();
const LogoutController = require("../controllers/LoginController");

router.get("/", LogoutController.Logout);

module.exports = router;
