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
  }
});
