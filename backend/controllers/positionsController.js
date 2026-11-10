import { PositionModel } from "../model/PositionsModel.js";

export const getAllPositions = async (req, res) => {
    res.json(await PositionModel.find({}));
};