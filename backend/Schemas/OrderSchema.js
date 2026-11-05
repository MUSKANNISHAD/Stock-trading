import { Schema } from "mongoose";

export const OrderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number,
            required: true,
            min: 2000
        },
        mode: {
            type: String,
            required: true,
            enum: ["BUY", "SELL"]
        }
    },
    {
        timestamps: true
    }
);
