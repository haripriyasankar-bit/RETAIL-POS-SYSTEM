import express from "express";
import {
  createOrder,
  getOrders
} from "../controllers/ordercontroller";

import { protect } from "../middleware/authmiddleware";
import { authorizeRoles } from "../middleware/rolemiddleware";

const router = express.Router();

// Cashier, Manager, Admin can create orders
router.post(
  "/",
  protect,
  authorizeRoles(
    "cashier",
    "manager",
    "admin"
  ),
  createOrder
);

// Manager & Admin can view orders
router.get(
  "/",
  protect,
  authorizeRoles(
    "manager",
    "admin"
  ),
  getOrders
);

export default router;