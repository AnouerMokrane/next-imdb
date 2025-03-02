import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
import { getFavorites } from "@/lib/actions/favorite";

export default async function page() {
  const data = await getFavorites();
  const hasFavorites = data?.favorites && data.favorites.length > 0;

  return (
    <>
      <h1 className="pb-6 text-lg font-bold">Your Favorites</h1>

      {hasFavorites ? (
        <GridWrapper>
          {data.favorites.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </GridWrapper>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">You have no favorite movies yet.</p>
        </div>
      )}
    </>
  );
}
