"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <>
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
