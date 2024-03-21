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
    return <Loader/>;
  }
  if (status === STATUSES.ERROR) {
    return <p className="">Error fetching data</p>;
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold text-red-600 pb-2">
        Trending movies
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
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
