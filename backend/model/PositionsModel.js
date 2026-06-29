import { model } from "mongoose";
import { PositionSchema } from "../Schemas/PositionsSchema.js";

 export const PositionModel = new model("position", PositionSchema);
