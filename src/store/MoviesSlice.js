
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetch',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2YxZDA1NzQ3MzQ5NTY2YjVhZjhlMmJlY2ExYTE3OCIsInN1YiI6IjY1ZmM1OWU2NjA2MjBhMDEzMDI1NTY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lw9nf130uEt4eiAXHM3H_qUc7u-aSQeRCHLVv1uEKH8'
      }
    };


    const response = await axios.request(options);
    return response.data;

  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      //console.log(action.payload)
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

/* export const { setMovies, setStatus } = movieSlice.actions; */
export default movieSlice.reducer;
