const express = require("express");
const UserController = require("../controllers");

const router = express.Router();

router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

module.exports = router;
