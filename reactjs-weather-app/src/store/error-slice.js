import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    error: null,
  },
  reducers: {
    handleError(state, action) {
      state.error = action.payload.message;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice;
