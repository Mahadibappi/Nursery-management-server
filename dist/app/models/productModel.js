"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    height: { type: String, required: true },
    potSize: { type: String, required: true },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
//
