// // src/redux/tourDetailsSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch details for a specific tour
// export const fetchTourDetails = createAsyncThunk(
//   'tourDetails/fetchTourDetails',
//   async (tourId) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${tourId}`); // Dummy API
//     // Adding extra mock data fields
//     return {
//       ...response.data,
//       flightDetails: 'Flight from XYZ to ABC',  // Mock flight data
//       cost: '$500',  // Mock cost
//       dateTime: '2024-09-05 10:00 AM',  // Mock date and time
//       totalPeople: 5,  // Mock data for number of people going on the tour
//     };
//   }
// );

// const tourDetailsSlice = createSlice({
//   name: 'tourDetails',
//   initialState: {
//     tourDetails: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTourDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTourDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.tourDetails = action.payload;
//       })
//       .addCase(fetchTourDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default tourDetailsSlice.reducer;
