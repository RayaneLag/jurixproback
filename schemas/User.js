import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["Professional", "guest"],
    },
    name: { type: String, required: true },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      minLength: 6,
      type: String,
      required: true,
    },
    picture: String,
    job: { type: String },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
