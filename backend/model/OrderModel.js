import { model } from "mongoose";

import { OrderSchema } from "../Schemas/OrderSchema.js";

const OrderModel = new model("order", OrderSchema);

export default { OrderModel };