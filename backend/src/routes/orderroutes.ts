import express from "express";
import {
  createOrder,
  getOrders,
} from "../controllers/ordercontroller";

import { protect } from "../middleware/authmiddleware";

const router =
  express.Router();

router.post(
  "/",
  protect,
  createOrder
);

router.get(
  "/",
  protect,
  getOrders
);

export default router;