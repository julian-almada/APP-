const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);

router.get("/about", mainController.about);

router.get("/logIn", mainController.logIn);

router.get("/contact", mainController.contact);

router.get("/carrito", mainController.carrito);

router.get("/register", mainController.register);

module.exports = router;
