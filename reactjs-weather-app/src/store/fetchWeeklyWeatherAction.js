import { weeklyWeatherActions } from './weekly-weather-slice';
import { currentWeatherActions } from './current-weather-slice';
import { errorActions } from './error-slice';

export const fetchWeeklyWeather = (coordData) => {
  return async (dispatch) => {
    const fetchWeeklyWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordData.lat}&lon=${coordData.lon}&units=metric&exclude=minutely,alerts&appid=7ba4a63727fc88b251c9cda128d47d42`
      );

      if (!response.ok) {
        throw new Error('Could not fetch weekly weather data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const weeklyWeatherData = await fetchWeeklyWeatherData();

      dispatch(
        currentWeatherActions.getCurrentWeather({
          icon: weeklyWeatherData.current.weather[0].icon,
          temp: weeklyWeatherData.current.temp,
          date: weeklyWeatherData.current.dt,
          description: weeklyWeatherData.current.weather[0].description,
          mainWeather: weeklyWeatherData.current.weather[0].main,
          status: weeklyWeatherData.current.clouds,
        })
      );
      dispatch(
        weeklyWeatherActions.getTodayWeatherData(weeklyWeatherData.current)
      );
      dispatch(
        weeklyWeatherActions.getDailyWeatherData(weeklyWeatherData.daily)
      );
      dispatch(
        weeklyWeatherActions.getHourlyWeatherData(weeklyWeatherData.hourly)
      );
      dispatch(
        errorActions.handleError({
          message: '',
        })
      );
    } catch (error) {
      dispatch(
        errorActions.handleError({
          message: 'Not found city',
        })
      );
    }
  };
};
