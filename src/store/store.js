import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MoviesSlice";
import queryReducer from "./QuerySlice";
import upcomingMovieReducer from "./UpcomingSlice";
import playingNowMovieReducer from "./PlayingNowSlice";
import movieDetailsReducer from "./MovieDetailsSlice";
import movieImagesReducer from "./MoreImagesSlice";
import movieReviewsReducer from "./ReviewsSlice";
import recommendedMovieReducer from "./RecommendationSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    queries: queryReducer,
    upcomingMovie: upcomingMovieReducer,
    playingNowMovie: playingNowMovieReducer,
    movieDetails: movieDetailsReducer,
    movieImages: movieImagesReducer,
    movieReviews: movieReviewsReducer,
    recommendedMovie: recommendedMovieReducer,
  },
});
export default store;
