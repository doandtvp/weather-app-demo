import createStore from 'redux-zero';

const initialState = {
  cityName: 'Ha Noi',
  coord: { lat: 21.0245, lon: 105.8412 },
  currentWeather: {},
  todayWeather: {},
  dailyWeather: [],
  hourlyWeather: [],
  errorMessage: null,
};

const store = createStore(initialState);

export default store;
