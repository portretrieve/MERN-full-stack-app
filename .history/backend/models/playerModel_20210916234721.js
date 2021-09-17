import mongoose from "mongoose";

const schema = mongoose.Schema;

export const playerSchema = new schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  phone: {
    isCoach: Boolean,
    default: false
  },
  team: {
    type: String
  },
  speed: {
    type: Number,
    enum: [1, 2, 3]
  },
  strength: {
    type: Number,
    enum: [1, 2, 3]
  },
  endurance: {
    type: Number,
    enum: [1, 2, 3]
  }
});
