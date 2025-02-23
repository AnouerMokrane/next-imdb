"use server";

import { auth } from "@clerk/nextjs/server";
import { connectDB } from "../mongodb";
import User from "../models/User";
import { Movie } from "@/components/MovieCard";

export const addToFav = async (movie: Movie) => {
  try {
    const { userId } = await auth();

    if (!userId) return;

    await connectDB();

    const user = await User.findById(userId);

    if (!user) {
      return { error: "User not found" };
    }

    user.favorites.push(movie);
    await user.save();
    return { message: "Movie added to favorites successfully" };
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
  return { error: "An error occurred while adding to favorites" };
};

export async function getFavorites(): Promise<{ favorites: Movie[] }> {
  await connectDB();
  const { userId } = await auth();
  if (!userId) return { favorites: [] as Movie[] };

  const user = await User.findOne({ _id: userId });
  return { favorites: user?.favorites || [] };
}

export const removeFromFav = async (movieId: number) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "User not logged in" };
    }

    await connectDB();

    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { favorites: movieId } }
    );
  } catch (error) {
    console.error("Error", error);
  }
};
