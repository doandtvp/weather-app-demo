import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../../store/search-slice';
import classes from './CurrentCity.module.css';
import heavyRain from '../../images/CurrentCity/heavy-rain.jpg';
import useConvertTime from '../../hooks/use-convert-time';
import { fetchCurrentWeather } from '../../store/fetchCurrentWeatherAction';

function CurrentCity() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const cityName = useSelector((state) => state.currentWeather.cityName);

  const currentWeatherData = useSelector(
    (state) => state.currentWeather.weather
  );

  const currentTime = useConvertTime(currentWeatherData.date);
  const unix_timestamp = currentWeatherData.date;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchActions.seacrhByCityName(search));
    dispatch(fetchCurrentWeather(search));
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
        src={`https://openweathermap.org/img/wn/${currentWeatherData.icon}@2x.png`}
        alt='weather-status'
      />
      <div className={classes.temp}>
        <p>{cityName}</p>
        <p> {Math.round(currentWeatherData.temp)}°C</p>
      </div>

      <div className={classes.timmer}>
        <p>
          {days[today]}, {currentTime}
        </p>
      </div>

      <div className={classes.weather}>
        <p>{currentWeatherData.description}</p>
        <p>
          {currentWeatherData.mainWeather} {currentWeatherData.status}%
        </p>
      </div>

      <div className={classes['weather-img']}>
        <div>
          <p>{cityName}</p>
        </div>
        <img src={heavyRain} alt='weather-img' />
      </div>
    </div>
  );
}

export default CurrentCity;
