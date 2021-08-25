import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './WeekWeather.module.css';
import DetailWeather from '../DetailWeather/DetailWeather';

function WeekWeather() {
  const dailyWeatherData = useSelector(
    (state) => state.weeklyWeather.dailyWeather
  );

  const initialState = useSelector(
    (state) => state.weeklyWeather.dailyWeather[0]
  );

  const initialActiveState = useSelector(
    (state) => state.weeklyWeather.dailyWeather[0].dt
  );

  const [detailWeather, setDetailWeather] = useState(initialState);
  const [active, setActive] = useState(initialActiveState);

  const getDetailWeather = (dt) => {
    dailyWeatherData.forEach((daily) => {
      if (daily.dt === dt) {
        setDetailWeather(daily);
        setActive(dt);
      }
    });
  };

  return (
    <React.Fragment>
      <div className={classes['week-weather']}>
        {dailyWeatherData.map((daily) => (
          <div
            onClick={() => getDetailWeather(daily.dt)}
            key={daily.dt}
            className={classes['weather-boxs']}
          >
            <div
              className={
                active === daily.dt
                  ? classes['weather-boxs__content-active']
                  : classes['weather-boxs__content']
              }
            >
              <p>
                {new Date(daily.dt * 1000).toLocaleDateString('en-GB', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'numeric',
                })}
              </p>
              <div className={classes['weather-boxs__img']}>
                <img
                  src={`https://openweathermap.org/img/w/${daily.weather[0].icon}.png`}
                  alt='img'
                />
                <p className={classes.temp}>
                  {Math.round(daily.temp.min)}°C - {Math.round(daily.temp.max)}
                  °C
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DetailWeather detailWeather={detailWeather} />
    </React.Fragment>
  );
}

export default WeekWeather;
