import { Schema } from "mongoose";

 export const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    mode: {
        type: String

    }
})
