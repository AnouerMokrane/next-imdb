"use server";

import { auth } from "@clerk/nextjs/server";
import User from "../models/User";
import { connectDB } from "../mongodb";

export const addToFav = async (movieId: number) => {
  const { userId } = await auth();

  if (!userId) return { error: "User not logged in" };

  await connectDB();

  const user = await User.findById(userId);

  if (!user) return { error: "Used not found" };

  if (user.favorites.includes(movieId)) {
    return { message: "Movie already in favorites" };
  }

  user.favorites.push(movieId);
  await user.save();
  return { message: "Movie added to favorites", favorites: user.favorites };
};
