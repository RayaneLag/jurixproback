import mongoose from "mongoose";

const jurisPrudenceSchema = new mongoose.Schema(
  {
    judge: String,
    tribunal: String,
    // ...
  },
  { timestamps: true }
);

module.exports = mongoose.model("JurisPrudence", jurisPrudenceSchema);
