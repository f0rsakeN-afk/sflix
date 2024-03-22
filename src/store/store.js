import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MoviesSlice";
import queryReducer from "./QuerySlice";
import upcomingMovieReducer from "./UpcomingSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    queries: queryReducer,
    upcomingMovie: upcomingMovieReducer,
  },
});
export default store;
