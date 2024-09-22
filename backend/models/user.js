import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    joiningDate: { type: Date }, // Changed to Date type
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
