import { createSlice } from '@reduxjs/toolkit';

const currentWeatherSlice = createSlice({
  name: 'current-weather',
  initialState: {
    cityName: 'Ha Noi',
    weather: {},
  },
  reducers: {
    getCurrentCityName(state, action) {
      state.cityName = action.payload;
    },
    getCurrentWeather(state, action) {
      state.weather = action.payload;
    },
  },
});

export const currentWeatherActions = currentWeatherSlice.actions;

export default currentWeatherSlice;
