"use server";

import { auth } from "@clerk/nextjs/server";
import { connectDB } from "../mongodb";
import User from "../models/User";

export const addToFav = async (movieId: number) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "User not logged in" };
    }

    await connectDB();

    const user = await User.findById(userId);

    if (!user) {
      return { error: "User not found" };
    }

    if (user.favorites.includes(movieId)) {
      return { message: "Movie already in favorites" };
    }

    user.favorites.push(movieId);
    await user.save();
    return { message: "Movie added to favorites successfully" };
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
  return { error: "An error occurred while adding to favorites" };
};

export const getFavorites = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "User not logged in" };
    }

    await connectDB();

    const user = await User.findById(userId);

    if (!user) {
      return { error: "User not found" };
    }

    return { favorites: user.favorites };
  } catch (error) {
    console.error("Error fetching favorites", error);
  }
};

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
