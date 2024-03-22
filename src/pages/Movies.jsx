import React from "react";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

const Movies = () => {
  return (
    <div
      className="pt-2 flex flex-col gap-4"
      
    >
      <section className="flex items-center justify-center">
        <SearchBar />
      </section>
      <SearchList />
    </div>
  );
};

export default Movies;
