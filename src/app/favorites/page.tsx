import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import { getFavorites } from "@/lib/actions/favorite";
import React from "react";

export default async function page() {
  const data = await getFavorites();
  return (
    <>
      <h1 className="pb-6 text-lg">Favorites</h1>
      <GridWrapper>
        {data?.favorites.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridWrapper>
    </>
  );
}
