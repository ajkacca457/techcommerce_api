import express from "express";
import { getProducts, getProduct, createProduct } from "../controllers/productControllers.js";

const router= express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct);
export default router;