import mongoose from "mongoose";
import { playerSchema } from "../models/playerModel";
const Player = mongoose.model("Player", playerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
};