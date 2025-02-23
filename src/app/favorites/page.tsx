import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import { getFavorites } from "@/lib/actions/favorite";
import React from "react";

export default async function page() {
  const favorites = await getFavorites();
  return (
    <>
      <h1>Favorites</h1>
      <GridWrapper>
        {favorites.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridWrapper>
    </>
  );
}
