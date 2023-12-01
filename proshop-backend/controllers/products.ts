import { Request, Response } from "express";
import products from "../data/products";

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  const product = products.find((product) => product._id === id);

  res.json(product);
};

export const postProduct = (req: Request, res: Response) => {
  const { body } = req;

  res.json({ message: "postProduct", body });
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    message: "putProduct",
    body,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "deleteProduct",
    id,
  });
};
