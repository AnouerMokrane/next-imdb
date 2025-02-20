import Image from "next/image";
import Link from "next/link";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
};

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      href={`movie/${movie.id}`}
      className=" rounded overflow-hidden shadow-lg sm:border border-gray-400 dark:white"
    >
      <Image
        className="w-full max-h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        height={300}
        width={580}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="px-6 py-4">
        <p className="text-gray-900 text-sm dark:text-gray-300">
          {movie.overview.length > 110
            ? movie.overview.substring(0, 100) + "..."
            : movie.overview}
        </p>
        <h3 className="font-bold text-gray-900 text-xl my-2 dark:text-gray-300">
          {movie.title}
        </h3>
        <p className="text-gray-900 text-base dark:text-gray-300">
          Release Date: {movie.release_date}
        </p>
      </div>
      <div className="px-6 pb-4 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ⭐ {movie.vote_average}
        </span>
      </div>
    </Link>
  );
}
