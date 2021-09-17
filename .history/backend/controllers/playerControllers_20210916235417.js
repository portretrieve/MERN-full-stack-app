import mongoose from "mongoose";
import { playerSchema } from "../models/playerModel";
const Player = mongoose.model("Player", playerSchema);
