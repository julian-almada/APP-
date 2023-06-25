const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const mainController = require("../controllers/mainController");

//validaciones

const validateCreateForm = [
    body("name").notEmpty().withMessage('Debes completar el campo con tu nombre'),
    body("last-name").notEmpty().withMessage('Debes completar el campo con tu apellido'),
    body("email").notEmpty().isEmail().withMessage('Debes completar un email valido')
];


router.get("/", mainController.home);

router.get("/about", mainController.about);

router.get("/logIn", mainController.logIn);

router.get("/contact", mainController.contact);

router.get("/carrito", mainController.carrito);

router.get("/register", validateCreateForm, mainController.register);

router.get("/productDetail", mainController.producDetail);

router.get("/productos", mainController.productos);

module.exports = router;
