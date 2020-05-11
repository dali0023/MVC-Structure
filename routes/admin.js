const express = require("express");
const router = express.Router();
const myController = require("../controllers/myController");

router.get("/", myController.home);
// router.post("/save-product", productController.saveNewProducts);

module.exports = router;
