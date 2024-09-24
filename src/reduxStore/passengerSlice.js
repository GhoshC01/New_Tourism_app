
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  passengers: [],
  totalCost: 0,
};

const passengerSlice = createSlice({
  name: 'passenger',
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      state.passengers.push(action.payload);
      state.totalCost += action.payload.cost;
    },
  },
});

export const { addPassenger } = passengerSlice.actions;
export const selectPassengers = (state) => state.passenger.passengers;
export const selectTotalCost = (state) => state.passenger.totalCost;

export default passengerSlice.reducer;
