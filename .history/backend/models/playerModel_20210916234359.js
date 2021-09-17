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
  }
});
