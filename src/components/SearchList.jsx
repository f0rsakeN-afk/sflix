import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { STATUSES1 } from "../store/QuerySlice";
import Loader from "./Loader";

const SearchList = () => {
  const { data, status } = useSelector((state) => state.queries);
  console.log(data);
  if (status === STATUSES1.LOADING) return <Loader />;
  if (status === STATUSES1.ERROR) return <p className="">error</p>;
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-red-600 pb-2">
        Search Results
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data &&
          data.results &&
          data.results.map((movie, index) => (
            <MovieList key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchList;
