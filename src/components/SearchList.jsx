import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { STATUSES1, remove } from "../store/QuerySlice";
import Loader from "./Loader";

const SearchList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.queries);
  //console.log(data);
  if (status === STATUSES1.LOADING) return <Loader />;
  if (status === STATUSES1.ERROR) return <p className="">error</p>;

  const handleClearResults = () => {
    dispatch(remove());
  };
  return (
    <div className="">
      {data && data.results && (
        <>
          <section
            className="flex justify-between items-center pb-2
          "
          >
            <h2 className="text-2xl font-semibold text-red-600 pb-2">
              Search Results
            </h2>
            <section className="flex gap-4 items-center">
              <span className="text-xl font-semibold text-blue-700">
                Found {data.results.length} results
              </span>
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 focus:outline-none font-semibold text-gray-200 rounded-sm"
                onClick={handleClearResults}
              >
                Clear results
              </button>
            </section>
          </section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.results.map((movie, index) => (
              <MovieList key={index} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchList;
