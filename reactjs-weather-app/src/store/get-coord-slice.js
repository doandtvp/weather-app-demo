import { createSlice } from '@reduxjs/toolkit';

const coordSlice = createSlice({
  name: 'coord',
  initialState: {
    coord: { lat: 21.0245, lon: 105.8412 },
  },
  reducers: {
    getCoord(state, action) {
      state.coord = action.payload.coord;
    },
  },
});

export const coordActions = coordSlice.actions;

export default coordSlice;
