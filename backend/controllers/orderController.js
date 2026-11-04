import { OrderModel } from "../model/OrderModel.js";

export const createOrder = async (req, res) => {
    const { name, qty, price, mode } = req.body;
    const newOrder = await OrderModel.create({ name, qty, price, mode });
    res.json(newOrder);
};