interface CurrentWeather {
  icon: string;
  temp: number;
  date: number;
  description: string;
  mainWeather: string;
  status: number;
}

interface TodayWeather {
  date: number;
  icon: string;
  temp: number;
  description: string;
  mainWeather: string;
  status: number;
}

const actions = () => ({
  getCityName: (state: {}, value: string) => {
    console.log(value);
    return {
      cityName: value,
    };
  },
  getCoord: (state: {}, value: { lat: number; lon: number }) => {
    return {
      coord: value,
    };
  },
  getCurrentWeather: (state: {}, value: CurrentWeather) => {
    return {
      currentWeather: value,
    };
  },
  getTodayWeather: (state: {}, value: TodayWeather) => {
    return {
      todayWeather: value,
    };
  },
  getDailyWeather: (state: {}, value: []) => {
    return {
      dailyWeather: value,
    };
  },
  getHourlyWeather: (state: {}, value: []) => {
    return {
      hourlyWeather: value,
    };
  },
  handleError: (state: {}, value: string) => {
    return {
      errorMessage: value,
    };
  },
});

export default actions;
