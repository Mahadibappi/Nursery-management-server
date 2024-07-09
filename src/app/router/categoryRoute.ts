import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController";

const router = Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
