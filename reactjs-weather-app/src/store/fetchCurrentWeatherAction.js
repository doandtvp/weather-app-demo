import { currentWeatherActions } from './current-weather-slice';
import { coordActions } from './get-coord-slice';
import { errorActions } from './error-slice';

export const fetchCurrentWeather = (searchData) => {
  return async (dispatch) => {
    const fetchCurrentWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=7ba4a63727fc88b251c9cda128d47d42`
      );

      if (!response.ok) {
        throw new Error('Fetch data by city name failed!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const currentWeatherData = await fetchCurrentWeatherData();

      dispatch(
        coordActions.getCoord({
          coord: currentWeatherData.coord,
        })
      );

      dispatch(
        currentWeatherActions.getCurrentCityName(currentWeatherData.name)
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
