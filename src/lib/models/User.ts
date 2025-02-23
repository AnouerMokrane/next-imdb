import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  favorites: [
    {
      id: { String, required: true },
      title: String,
      overview: String,
      poster_path: String,
      backdrop_path: String,
      vote_average: Number,
      release_date: String,
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
