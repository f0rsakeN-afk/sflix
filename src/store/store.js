import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MoviesSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
export default store;
