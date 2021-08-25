import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: 'hanoi',
  },
  reducers: {
    seacrhByCityName(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
