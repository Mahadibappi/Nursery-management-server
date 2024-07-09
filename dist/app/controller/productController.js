"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getProducts = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new productModel_1.default(req.body);
        yield product.save();
        res.status(201).json({
            message: "Product created successful",
            data: product,
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel_1.default.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const product = yield productModel_1.default.findById(id);
        console.log(product);
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.default.findByIdAndDelete(req.params.id);
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.status(200).json({ message: "Product deleted" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.deleteProduct = deleteProduct;
