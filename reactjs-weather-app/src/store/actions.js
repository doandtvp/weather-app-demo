const actions = (store) => ({
  getCityName: (state, value) => {
    return {
      cityName: value,
    };
  },
  getCoord: (state, value) => {
    return {
      coord: value,
    };
  },
  getCurrentWeather: (state, value) => {
    return {
      currentWeather: value,
    };
  },
  getTodayWeather: (state, value) => {
    return {
      todayWeather: value,
    };
  },
  getDailyWeather: (state, value) => {
    return {
      dailyWeather: value,
    };
  },
  getHourlyWeather: (state, value) => {
    return {
      hourlyWeather: value,
    };
  },
  handleError: (state, value) => {
    return {
      errorMessage: value,
    };
  },
});

export default actions;
