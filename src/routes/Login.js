const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");

router.get('/', LoginController.renderLogin);
router.post('/', LoginController.getInfo);

module.exports = router;
