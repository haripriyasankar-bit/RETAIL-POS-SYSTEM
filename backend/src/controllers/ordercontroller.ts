import { Request, Response } from "express";
import Order from "../models/order";
import Product from "../models/product";

export const createOrder =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const {
        userId,
        items
      } = req.body;

      let totalAmount = 0;

      for (const item of items) {
        const product =
          await Product.findById(
            item.productId
          );

        if (!product) {
          return res
            .status(404)
            .json({
              message:
                "Product not found"
            });
        }

        if (
          product.stock <
          item.quantity
        ) {
          return res
            .status(400)
            .json({
              message:
                "Insufficient stock"
            });
        }

        totalAmount +=
          product.price *
          item.quantity;

        product.stock -=
          item.quantity;

        await product.save();
      }

      const order =
        await Order.create({
          userId,
          items,
          totalAmount
        });

      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({
        message:
          "Error creating order"
      });
    }
  };

export const getOrders =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const orders =
        await Order.find();

      res.status(200).json(
        orders
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Error fetching orders"
      });
    }
  };