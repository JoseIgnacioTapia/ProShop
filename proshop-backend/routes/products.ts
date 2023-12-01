import { Router } from "express";
import { getProduct, getProducts, postProduct } from "../controllers/products";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", postProduct);

router.put("/:id", getProduct);

export default router;
