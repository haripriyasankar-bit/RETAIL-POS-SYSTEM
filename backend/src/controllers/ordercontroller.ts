import { Request, Response } from "express";
import Order from "../models/order";
import Product from "../models/product";

export const createOrder = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId, quantity } =
      req.body;

    const product =
      await Product.findById(productId);

    if (!product) {
      return res
        .status(404)
        .json({
          message:
            "Product not found",
        });
    }

    if (
      product.stock < quantity
    ) {
      return res
        .status(400)
        .json({
          message:
            "Not enough stock",
        });
    }

    product.stock -= quantity;
    await product.save();

    const order =
      await Order.create({
        productId,
        quantity,
        totalPrice:
          product.price *
          quantity,
      });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Error creating order",
    });
  }
};
export const getOrders = async (
  req: Request,
  res: Response
) => {
  try {
    const orders =
      await Order.find()
        .populate(
          "productId",
          "name"
        )
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      orders
    );
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Error fetching orders",
    });
  }
};