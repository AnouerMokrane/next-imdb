"use client";

import { addToFav, removeFromFav } from "@/lib/actions/favorite";
import { useUser } from "@clerk/nextjs";
import { useState, useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { Movie } from "./MovieCard";

export default function Button({
  movie,
  favoritesIds,
}: {
  movie: Movie;
  favoritesIds: string[];
}) {
  const [isPending, startTransition] = useTransition();
  const [Fav, setFav] = useState<string[]>(favoritesIds);
  const { user } = useUser();

  const isFav = Fav.includes(movie.id.toString());

  const handleAddToFav = async () => {
    startTransition(async () => {
      if (isFav) {
        await removeFromFav(movie.id);
        setFav((prevFav) => prevFav.filter((id) => id != movie.id.toString()));
        toast.success("Removed from favorites");
      } else {
        const result = await addToFav(movie);

        if (result?.error) {
          toast.error(result?.error);
        } else if (result?.message) {
          toast.success(result?.message);
          setFav((prevFav) => [...prevFav, movie.id.toString()]);
        }
      }
    });
  };

  if (!user) return null;

  return (
    <>
      <button
        type="submit"
        className={`px-4 py-2  text-white rounded-lg shadow  transition-colors ${
          isFav
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isPending}
        onClick={handleAddToFav}
      >
        {isPending ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : isFav ? (
          "Remove from favorites"
        ) : (
          "Add to Favorites"
        )}
      </button>
    </>
  );
}
