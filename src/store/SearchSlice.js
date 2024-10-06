import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES1 = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  data: [],
  status: STATUSES1.IDLE,
};

export const fetchQuery = createAsyncThunk("query/fetch", async (query) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/multi",
    params: { query, include_adult: "true", language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2YxZDA1NzQ3MzQ5NTY2YjVhZjhlMmJlY2ExYTE3OCIsInN1YiI6IjY1ZmM1OWU2NjA2MjBhMDEzMDI1NTY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lw9nf130uEt4eiAXHM3H_qUc7u-aSQeRCHLVv1uEKH8",
    },
  };

  const response = await axios.request(options);
  return response.data;
});

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    remove: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuery.pending, (state) => {
        state.status = STATUSES1.LOADING;
      })
      .addCase(fetchQuery.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES1.IDLE;
      })
      .addCase(fetchQuery.rejected, (state) => {
        state.status = STATUSES1.ERROR;
      });
  },
});

export const { remove } = querySlice.actions;
export default querySlice.reducer;