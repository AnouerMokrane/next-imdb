"use client";

import { addToFav, getFavorites, removeFromFav } from "@/lib/actions/favorite";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { Movie } from "./MovieCard";

export default function Button({ movie }: { movie: Movie }) {
  const [isPending, startTransition] = useTransition();
  const [Fav, setFav] = useState<string[]>([]);
  const [isFavLoading, setIsFavLoading] = useState(true);
  const { user } = useUser();

  const isFav = Fav.includes(movie.id.toString());

  const handleAddToFav = async () => {
    startTransition(async () => {
      if (isFav) {
        await removeFromFav(movie.id);
        setFav((prevFav) => prevFav.filter((id) => id != movie.id.toString()));
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

  useEffect(() => {
    const fetchFavs = async () => {
      try {
        const result = await getFavorites();
        setFav(result.favorites);
      } catch {
        toast.error("Failed to fetch favorites");
      } finally {
        setIsFavLoading(false);
      }
    };
    fetchFavs();
  }, []);

  if (!user) return null;

  return (
    <>
      {!isFavLoading ? (
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
      ) : (
        "loading..."
      )}
    </>
  );
}
