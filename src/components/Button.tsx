"use client";

import { addToFav } from "@/lib/actions/favorite";
import { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Button({ movieId }: { movieId: number }) {
  const [isPending, startTransition] = useTransition();

  const handleAddToFav = async () => {
    startTransition(async () => {
      const result = await addToFav(movieId);

      if (result.error) {
        toast.error(result.error);
      } else if (result.message) {
        toast.success(result.message);
      }
    });
  };

  return (
    <>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        disabled={isPending}
        onClick={handleAddToFav}
      >
        {isPending ? (
          <AiOutlineLoading3Quarters className=" animate-spin" />
        ) : (
          "Add to Favorites"
        )}
      </button>
    </>
  );
}
