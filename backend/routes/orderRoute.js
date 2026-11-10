import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";

const router = Router();
router.post("/newOrder", createOrder);
router.get("/allOrders", getAllOrders);

export default router;