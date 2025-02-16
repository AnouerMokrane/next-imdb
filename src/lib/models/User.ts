import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  favorites: [String],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
