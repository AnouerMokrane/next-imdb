"use client";

import { addToFav } from "@/lib/actions/favorite";
import Form from "next/form";
import { useFormStatus } from "react-dom";

export default function Button({ movieId }: { movieId: number }) {
  const { pending } = useFormStatus();
  const handleSubmit = async () => {
    const result = await addToFav(movieId);
    console.log(result);
  };
  return (
    <Form action={handleSubmit}>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
        disabled={pending}
      >
        {pending ? "loading..." : "Add to Favorites"}
      </button>
    </Form>
  );
}
