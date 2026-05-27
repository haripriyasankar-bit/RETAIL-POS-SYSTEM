import { Request, Response } from "express";
import Product from "../models/product";

export const addProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product =
      await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error creating product"
    });
  }
};

export const getProducts = async (
  req: Request,
  res: Response
) => {
  try {
    const products =
      await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products"
    });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error updating product"
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Product deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting product"
    });
  }
};