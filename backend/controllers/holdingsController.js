import { holdingsModels } from "../model/HoldingsModel.js";

export const getAllHoldings = async (req, res) => {
    res.json(await holdingsModels.find({}));
};