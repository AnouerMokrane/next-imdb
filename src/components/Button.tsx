"use client";

import { useFormStatus } from "react-dom";

export default function Button({ movieId }: { movieId: number }) {
  const { pending } = useFormStatus();

  return (
    <>
      <input type="text" hidden name="movieId" value={movieId} />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        disabled={pending}
      >
        {pending ? "loading..." : "Add to Favorites"}
      </button>
    </>
  );
}
