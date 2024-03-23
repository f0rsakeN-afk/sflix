import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchMovies } from "../store/MoviesSlice";
import MovieList from "./MovieList";
import Loader from "./Loader";

const Trending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.movies);
  //console.log(data);

  if (status === STATUSES.LOADING) {
    return <Loader />;
  }
  if (status === STATUSES.ERROR) {
    return (
      <p className="text-center text-3xl text-gray-200 font-semibold">
        Error fetching data
      </p>
    );
  }
  return (
    <div className="border border-slate-400 p-2 rounded-sm">
      <h2 className="text-2xl font-semibold text-red-600 ">Trending movies</h2>

      <div className=" flex  overflow-x-scroll no-scrollbar  space-x-5 py-2">
        {data &&
          data.results &&
          data.results.map((movie, index) => (
            <MovieList movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Trending;
