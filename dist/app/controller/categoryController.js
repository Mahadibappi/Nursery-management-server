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
exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.getCategories = exports.createCategory = void 0;
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, products } = req.body;
        // Create the category
        const category = new categoryModel_1.default({ name, image, products });
        yield category.save();
        // Populate the products field
        yield category.populate("products");
        res.status(201).json({
            message: "Category created successfully",
            data: category,
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.createCategory = createCategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryModel_1.default.find().populate("products");
        res.status(200).json(categories);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getCategories = getCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryModel_1.default.findById(req.params.id).populate("products");
        if (!category)
            return res.status(404).json({ error: "Category not found" });
        res.status(200).json(category);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getCategory = getCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!category)
            return res.status(404).json({ error: "Category not found" });
        res.status(200).json(category);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryModel_1.default.findByIdAndDelete(req.params.id);
        if (!category)
            return res.status(404).json({ error: "Category not found" });
        res.status(200).json({ message: "Category deleted" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.deleteCategory = deleteCategory;
