import React, { useEffect, Suspense } from 'react';
import Loading from './components/UI/Loading';
import { connect } from 'redux-zero/react';
import actions from './store/actions';

const Container = React.lazy(() => import('./components/Container/Container'));

const mapToProps = (state) => state;

function App({
  coord,
  getCurrentWeather,
  getTodayWeather,
  getDailyWeather,
  getHourlyWeather,
  handleError,
}) {
  const fetchWeeklyWeatherData = async (coordData) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordData.lat}&lon=${coordData.lon}&units=metric&exclude=minutely,alerts&appid=f1ca9b22e9abb2b40c57425354e02264`
      );

      if (!response.ok) {
        throw new Error('Could not fetch weekly weather data!');
      }

      const data = await response.json();

      getCurrentWeather({
        icon: data.current.weather[0].icon,
        temp: data.current.temp,
        date: data.current.dt,
        description: data.current.weather[0].description,
        mainWeather: data.current.weather[0].main,
        status: data.current.clouds,
      });

      getTodayWeather(data.current);
      getDailyWeather(data.daily);
      getHourlyWeather(data.hourly);
      handleError('');
    } catch (error) {
      handleError('Not found city!');
    }
  };

  useEffect(() => {
    fetchWeeklyWeatherData(coord);
  }, [coord]);

  return (
    <div className='app'>
      <Suspense fallback={<Loading />}>
        <Container />
      </Suspense>
    </div>
  );
}

export default connect(mapToProps, actions)(App);
