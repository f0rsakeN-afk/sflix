import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../store/UpcomingSlice";
import { STATUSES } from "../store/MoviesSlice";
import Loader from "./Loader";

const UpcomingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);

  const { data, status } = useSelector((state) => state.upcomingMovie);
  //console.log(data);

  if (status === STATUSES.LOADING) {
    return <Loader />;
  }
  if (status === STATUSES.ERROR) {
    return <p className="">Error fetching data</p>;
  }
  return (
    <div className="border border-slate-400 p-2 rounded-sm">
      <h2 className="text-2xl font-semibold text-red-600 ">Upcoming movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7  gap-4 py-2">
        {data &&
          data.results &&
          data.results.map((item, index) => (
            <div
              className="flex flex-col gap-1 bg-gray-150 shadow-2xl overflow-hidden  rounded-lg "
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className="h-80 w-72"
              />
              <h2 className=" text-center font-bold text-xl text-gray-200 p-2">
                {item.original_title || item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingMovie;
