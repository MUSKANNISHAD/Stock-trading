import mongoose, { Schema } from "mongoose";

export const HoldingsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
    },
    avg: {
        type: Number,
    },
    price: {
        type: Number,
    },
    net: {
        type: String
    },
    day: {
        type: String
    }

});
