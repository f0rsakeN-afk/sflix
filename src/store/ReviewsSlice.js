import axios from "axios";
import { STATUSES } from "./MoviesSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

export const fetchMovieReviews = createAsyncThunk(
  "fetchMovieReviews/fetch",
  async (id) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2YxZDA1NzQ3MzQ5NTY2YjVhZjhlMmJlY2ExYTE3OCIsInN1YiI6IjY1ZmM1OWU2NjA2MjBhMDEzMDI1NTY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lw9nf130uEt4eiAXHM3H_qUc7u-aSQeRCHLVv1uEKH8",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const movieReviewsSlice = createSlice({
  name: "movieReviews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieReviews.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchMovieReviews.fulfilled, (state, action) => {
      state.data = action.payload;
      //console.log(action.payload);
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchMovieReviews.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
export default movieReviewsSlice.reducer;
