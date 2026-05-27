import express from "express";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/productcontroller";

import { protect } from "../middleware/authmiddleware";
import { authorizeRoles } from "../middleware/rolemiddleware";

const router = express.Router();

// Admin & Manager can add products
router.post(
  "/",
  protect,
  authorizeRoles("admin", "manager"),
  addProduct
);

// Everyone logged in can view products
router.get(
  "/",
  protect,
  getProducts
);

// Admin & Manager can update
router.put(
  "/:id",
  protect,
  authorizeRoles("admin", "manager"),
  updateProduct
);

// Only Admin can delete
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteProduct
);

export default router;