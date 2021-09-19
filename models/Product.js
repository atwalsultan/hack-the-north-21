const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ProductSchema = new Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
	},
	price: {
		type: String,
	},
	vendor: {
		type: String,
	},
	image_link: {
		type: String,
	},
	product_link: {
		type: String,
	}
});

module.exports = Product = mongoose.model("product", ProductSchema);
