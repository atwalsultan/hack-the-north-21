const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ProductSchema = new Schema({
	Name: {
		type: String,
		required: true,
	}
});

module.exports = Product = mongoose.model("product", ProductSchema);
