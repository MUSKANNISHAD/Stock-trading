import { Router } from "express";
import { getAllHoldings } from "../controllers/holdingsController.js";

const router = Router();
router.get("/allHoldings", getAllHoldings);

export default router;