import React from "react";
import GoBack from "../utils/GoBack";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <h2 className="text-3xl font-semibold text-gray-800 ">Page Not Found</h2>
      <button
        className=" px-4 py-2 bg-blue-600 text-gray-200 font-semibold focus:outline-none hover:bg-blue-700 rounded-sm"
        onClick={GoBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
