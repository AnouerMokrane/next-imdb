import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import React from "react";

export default async function TrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const movies = await res.json();
  if (!res.ok) {
    throw new Error(movies.status_message);
  }
  return (
    <GridWrapper>
      {movies.results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridWrapper>
  );
}
