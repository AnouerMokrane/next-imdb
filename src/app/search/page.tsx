import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;

  if (!query) {
    return <div className="text-center">No search query provided</div>;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  const movies = await res.json();

  return (
    <GridWrapper>
      {movies.results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridWrapper>
  );
}
