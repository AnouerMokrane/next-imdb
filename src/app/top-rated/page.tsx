import GridWrapper from "@/components/GridWrapper";
import MovieCard, { Movie } from "@/components/MovieCard";
//import Pagination from "@/components/pagination";

export default async function TopRated({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page } = await searchParams;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${
      page || 1
    }`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const movies = await res.json();
  console.log(movies.total_pages);
  return (
    <>
      <GridWrapper>
        {movies.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridWrapper>
      {/* add pagination */}
      {/* <Pagination total_pages={movies.total_pages} /> */}
    </>
  );
}
