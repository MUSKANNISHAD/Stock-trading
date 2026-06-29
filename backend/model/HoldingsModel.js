import mongoose from "mongoose";
import { model } from "mongoose";
import {HoldingsSchema} from "../Schemas/holdingSchemas.js";

 export const holdingsModels=new model("holding",HoldingsSchema);

// export default {holdingsModels};