import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchQuery } from "../store/QuerySlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleClick = () => {
    //console.log(query);
    if (!query) return;
    dispatch(fetchQuery(query));
    setQuery("");
  };
  return (
    <div className=" flex gap-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the movie title"
        className="p-2 border border-slate-300 focus:outline-0 rounded-full text-gray-700 md:w-[25rem] lg:w-[30rem] focus:shadow-lg"
      />
      <button
        className="px-3 py-2 bg-blue-600 rounded-md font-semibold text-gray-200 text-xl tracking-wide hover:bg-blue-700 transition-colors duration-200 ease-in"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
