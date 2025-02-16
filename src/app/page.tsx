import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";

export default async function Home() {
  const movieRes = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const movies = await movieRes.json();
  return (
    <GridWrapper>
      {movies.results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridWrapper>
  );
}
