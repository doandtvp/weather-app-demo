import createStore from 'redux-zero';

interface InitialState {
  cityName: string;
  coord: { lat: number; lon: number };
  currentWeather: {};
  todayWeather: {};
  dailyWeather: [];
  hourlyWeather: [];
  errorMessage: string;
}

const initialState: InitialState = {
  cityName: 'Ha Noi',
  coord: { lat: 21.0245, lon: 105.8412 },
  currentWeather: {},
  todayWeather: {},
  dailyWeather: [],
  hourlyWeather: [],
  errorMessage: '',
};

const store = createStore(initialState);

export default store;
