import { createSlice } from '@reduxjs/toolkit';

const weeklyWeatherSlice = createSlice({
  name: 'weekly-weather',
  initialState: {
    todayWeather: {},
    dailyWeather: [],
    hourlyWeather: [],
    detailWeather: {},
  },
  reducers: {
    getTodayWeatherData(state, action) {
      state.todayWeather = action.payload;
    },
    getDailyWeatherData(state, action) {
      state.dailyWeather = action.payload;
    },
    getHourlyWeatherData(state, action) {
      state.hourlyWeather = action.payload;
    },
    getDetailWeather(state, action) {
      state.detailWeather = action.payload;
    },
  },
});

export const weeklyWeatherActions = weeklyWeatherSlice.actions;

export default weeklyWeatherSlice;
