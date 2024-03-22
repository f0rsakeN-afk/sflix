import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MoviesSlice";
import queryReducer from "./QuerySlice";
import upcomingMovieReducer from "./UpcomingSlice";
import playingNowMovieReducer from "./PlayingNowSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    queries: queryReducer,
    upcomingMovie: upcomingMovieReducer,
    playingNowMovie: playingNowMovieReducer,
  },
});
export default store;
