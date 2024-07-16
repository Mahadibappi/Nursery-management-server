import { Request, Response } from "express";
import Category from "../models/categoryModel";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, image, products } = req.body;

    // Create the category
    const category = new Category({ name, image, products });
    await category.save();

    // Populate the products field
    await category.populate("products");

    res.status(201).json({
      message: "Category created successfully",
      data: category,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().populate("products");
    res.status(200).json(categories);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(200).json(category);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(200).json(category);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(200).json({ message: "Category deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
