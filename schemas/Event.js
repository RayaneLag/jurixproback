import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dueDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
