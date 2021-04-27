
const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const productService = require('../services/ProductService.js');
const validateProduct = require("../middleware/Validation.js")

//GET ALL PRODUCTS
router.get("/", productService.getAllproducts)

//GET A SPECIFIC PRODUCT
router.get("/:id", productService.getASpecificProduct)

//CREATE A PRODUCT
router.post("/",validateProduct.validateProduct, productService.createAProduct)

router.put("/:id", validateProduct.validateProduct, productService.updateAProduct)

router.delete("/:id", productService.deleteAProduct)

module.exports = router;