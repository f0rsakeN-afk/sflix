import React from "react";

const MovieList = ({ movie }) => {
  return (
    <div className=" rounded overflow-hidden shadow-xl">
      <img
        className="w-full h-[20rem]"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              loading="lazy"
      />

      <div className="p-4">
        <div className=" ">
          <div className="font-bold text-base mb-2">
            {movie.original_title || movie.name}
          </div>
          <p className="text-gray-700 text-sm">{movie.overview}</p>
        </div>
        <div className=" pt-4 flex gap-2 flex-col">
          <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
            Popularity: {movie.popularity}
          </span>
          <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
            Average vote: {movie.vote_average}
          </span>

          {movie.release_date && (
            <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Release Date: {movie.release_date}
            </span>
          )}

          <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Vote Count:{movie.vote_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
