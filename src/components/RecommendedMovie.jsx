import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../store/RecommendationSlice";
import MovieList from "./MovieList";
import { STATUSES } from "../store/MoviesSlice";
import Loader from "./Loader";

const RecommendedMovie = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendedMovies(id));
  }, [dispatch, id]);

  const { data, status } = useSelector((state) => state.recommendedMovie);
  //console.log(data);
  if (status === STATUSES.LOADING) return <Loader />;
  return (
    <div className="pt-4">
      <h2 className=" text-2xl text-yellow-600 font-semibold  pb-2">
        Recommendations
      </h2>
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

export default RecommendedMovie;
