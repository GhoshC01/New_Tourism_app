// src/redux/tourSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch tours
export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await axios.get('http://localhost:5000/api/tour'); // Replace with your actual API URL
  return response.data;
});

const tourSlice = createSlice({
  name: 'tours',
  initialState: {
    tours: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tourSlice.reducer;
