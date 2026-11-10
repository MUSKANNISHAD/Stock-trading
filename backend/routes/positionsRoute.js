import { Router } from "express";
import { getAllPositions } from "../controllers/positionsController.js";

const router = Router();
router.get("/allPositions", getAllPositions);

export default router;