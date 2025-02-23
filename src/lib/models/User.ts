import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  favorites: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      poster_path: { type: String, required: true },
      release_date: { type: String, required: true },
      overview: { type: String, required: true },
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
