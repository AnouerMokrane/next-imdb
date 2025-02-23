"use client";

import { addToFav, getFavorites, removeFromFav } from "@/lib/actions/favorite";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Button({ movieId }: { movieId: number }) {
  const [isPending, startTransition] = useTransition();
  const [Fav, setFav] = useState<string[]>([]);
  const [isFavLoading, setIsFavLoading] = useState(true);
  const { user } = useUser();

  const isFav = Fav.includes(movieId.toString());

  const handleAddToFav = async () => {
    startTransition(async () => {
      if (isFav) {
        await removeFromFav(movieId);
        setFav((prevFav) => prevFav.filter((id) => id !== movieId));
      } else {
        const result = await addToFav(movieId);

        if (result.error) {
          toast.error(result.error);
        } else if (result.message) {
          toast.success(result.message);
          setFav((prevFav) => [...prevFav, movieId]);
        }
      }
    });
  };

  useEffect(() => {
    const fetchFavs = async () => {
      try {
        const result = await getFavorites();
        console.log("Fetched favorites:", result);
        console.log("Fetched favorites:", Fav);

        setFav(result?.favorites || []);
        console.log("Fetched favorites:", Fav);
      } catch {
        toast.error("Failed to fetch favorites");
      } finally {
        setIsFavLoading(false);
      }
    };
    fetchFavs();
  }, [Fav]);

  if (!user) return null;

  return (
    <>
      {!isFavLoading ? (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
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
        "loading"
      )}
    </>
  );
}
