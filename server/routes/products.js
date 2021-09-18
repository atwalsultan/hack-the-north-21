const express = require("express");
const router = express.Router();

// Import model
const Product = require("../models/Product");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Product.find()
		.then((product) => {
			res.status(200).send(product);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
