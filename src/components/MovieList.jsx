import React from "react";

const MovieList = ({ movie }) => {
  return (
    movie.poster_path && (
      <div className="rounded-md shadow-lg   bg-gray-100">
        <img
          className="w-80 h-64"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          loading="lazy"
        />

        <div className="p-4">
          <h2 className="font-bold text-xl text-gray-800 text-center">
            {movie.original_title || movie.name}
          </h2>

          {/* <p className="text-gray-700 text-sm">{movie.overview}</p> */}
          <div className="pt-4 flex gap-2 flex-col">
            <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
              Popularity: {movie.popularity}
            </span>
            {movie.vote_average ? (
              <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                Average vote: {movie.vote_average}
              </span>
            ) : (
              ""
            )}

           {/*  {movie.release_date ? (
              <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                Release Date: {movie.release_date}
              </span>
            ) : (
              ""
            )} */}

            {movie.vote_count ? (
              <span className="w-max bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                Vote Count: {movie.vote_count}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
