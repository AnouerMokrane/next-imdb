import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import { getFavorites } from "@/lib/actions/favorite";
import React from "react";

export default async function page() {
  const favIds = await getFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      <GridWrapper>
        <h1>f</h1>
        {/* {favorites.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
      </GridWrapper>
    </div>
  );
}
