import { configureStore } from '@reduxjs/toolkit';
import currentWeatherSlice from './current-weather-slice';
import weeklyWeatherSlice from './weekly-weather-slice';
import searchSlice from './search-slice';
import coordSlice from './get-coord-slice';
import errorSlice from './error-slice';

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherSlice.reducer,
    searchWeather: searchSlice.reducer,
    weeklyWeather: weeklyWeatherSlice.reducer,
    coordData: coordSlice.reducer,
    errorData: errorSlice.reducer,
  },
});

export default store;
