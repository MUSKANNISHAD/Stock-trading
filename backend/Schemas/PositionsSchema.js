import mongoose, { Schema } from "mongoose";

export const PositionSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    qty: {
        type: Number
    },
    avg: {
        type: Number
    },
    net: {
        type: String
    },
    day: {
        type: String
    },
    isLoss: {
        type: Boolean
    }
});
