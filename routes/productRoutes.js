import express from "express";
import { getProducts, getProduct, createProduct, uploadImage } from "../controllers/productControllers.js";

const router= express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct);
router.route("/:id/image").put(uploadImage);


export default router;