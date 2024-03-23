import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./MoviesSlice";
import axios from "axios";

const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

export const fetchMovieDetails = createAsyncThunk(
  "getMovieDetails/fetch",
  async (id) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
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

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      //console.log(action.payload);
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default movieDetailsSlice.reducer;
