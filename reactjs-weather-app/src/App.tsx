import React, { useEffect, Suspense } from 'react';
import Loading from './components/UI/Loading';
import { connect } from 'redux-zero/react';
import actions from './store/actions';

const Container = React.lazy(() => import('./components/Container/Container'));

interface StoreProps {
  coord: { lat: number; lon: number };
  getCurrentWeather: Function;
  getTodayWeather: Function;
  getDailyWeather: Function;
  getHourlyWeather: Function;
  handleError: Function;
}

interface InitialState {
  cityName: string;
  coord: { lat: number; lon: number };
  currentWeather: {};
  todayWeather: {};
  dailyWeather: [];
  hourlyWeather: [];
  errorMessage: string;
}

const mapToProps = (state: InitialState) => state;

function App(props: StoreProps) {
  const {
    coord,
    getCurrentWeather,
    getTodayWeather,
    getDailyWeather,
    getHourlyWeather,
    handleError,
  } = props;

  const fetchWeeklyWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely,alerts&appid=f1ca9b22e9abb2b40c57425354e02264`
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
    fetchWeeklyWeatherData();
  }, [coord]);

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Container />
      </Suspense>
    </div>
  );
}

export default connect(mapToProps, actions)(App);
