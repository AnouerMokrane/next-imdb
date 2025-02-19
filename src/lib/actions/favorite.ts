"use server";

import { auth } from "@clerk/nextjs/server";
import { connectDB } from "../mongodb";
import User from "../models/User";

export const addToFav = async (FormData: FormData): Promise<any> => {
  try {
    const movieId = FormData.get("movieId");
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

    return { message: "Movie added to favorites", favorites: user.favorites };
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return { error: "An error occurred while adding to favorites" };
  }
};
