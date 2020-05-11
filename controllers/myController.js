const path = require("path");
const Product = require("../models/myModel");

const home = (req, res, next) => {
  res.render("add-products", {
    pageTitle: "Add Product",
  });
};

module.exports = { home };
