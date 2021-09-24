import React, { useState } from 'react';
import heavyRain from '../../images/CurrentCity/heavy-rain.jpg';
import classes from './CurrentCity.module.css';
import { connect } from 'redux-zero/react';
import actions from '../../store/actions';
import useConvertTime from '../../hooks/use-convert-time';

const mapToProps = (state) => state;

function CurrentCity({
  cityName,
  currentWeather,
  getCityName,
  getCoord,
  handleError,
}) {
  const [search, setSearch] = useState('');

  const currentTime = useConvertTime(currentWeather.date);
  const unix_timestamp = currentWeather.date;
  let date = new Date(unix_timestamp * 1000);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let today = date.getDay();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function fetchCurrentWeatherData(searchData) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=f1ca9b22e9abb2b40c57425354e02264`
      );

      if (!response.ok) {
        throw new Error('Could not fetch weekly weather data!');
      }

      const data = await response.json();

      getCityName(data.name);
      getCoord(data.coord);
      handleError('');
    } catch (error) {
      handleError('Not found city!');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCurrentWeatherData(search);
    setSearch('');
  };

  return (
    <div className={classes['current-city']}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          className={classes.input}
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='Search'
        />
      </form>
      <img
        src={`http://openweathermap.org/img/wn/${currentWeather?.icon}@2x.png`}
        alt='weather-status'
      />
      <div className={classes.temp}>
        <p>{cityName}</p>
        <p> {Math.round(currentWeather.temp)}°C</p>
      </div>

      <div className={classes.timmer}>
        <p>
          {days[today]}, {currentTime}
        </p>
      </div>

      <div className={classes.weather}>
        <p>{currentWeather.description}</p>
        <p>
          {currentWeather.mainWeather} {currentWeather.status}%
        </p>
      </div>

      <div className={classes['weather-img']}>
        <img src={heavyRain} alt='weather-img' />
        <p>{cityName}</p>
      </div>
    </div>
  );
}

export default connect(mapToProps, actions)(CurrentCity);
