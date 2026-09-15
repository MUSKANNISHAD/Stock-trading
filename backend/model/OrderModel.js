import { model } from "mongoose";

import { OrderSchema } from "../Schemas/OrderSchema.js";

export const OrderModel = new model("order", OrderSchema);
