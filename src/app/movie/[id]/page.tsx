import Image from "next/image";
import React from "react";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const movie = await movieRes.json();
  if (movie.status_code === 34) {
    return <h1 className="text-center">Movie not found</h1>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-8 flex-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{movie.title}</h1>
          <ul className="mb-4">
            <li className="mb-2">
              <strong>Release Date:</strong> {movie.release_date}
            </li>
            <li className="mb-2">
              <strong>Rating:</strong> {movie.vote_average} / 10
            </li>
            <li className="mb-2">
              <strong>Runtime:</strong> {movie.runtime} minutes
            </li>
            <li className="mb-2">
              <strong>Overview:</strong> {movie.overview}
            </li>
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
            Add to Favorites
          </button>
        </div>
      </div>
    </>
  );
}
