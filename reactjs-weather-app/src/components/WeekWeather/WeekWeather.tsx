import React, { useState } from 'react';
import { useSelector } from 'redux-zero/react';
import classes from './WeekWeather.module.css';
import DetailWeather from '../DetailWeather/DetailWeather';

function WeekWeather() {
  const dailyWeatherData = useSelector(
    (state: { dailyWeather: [] }) => state.dailyWeather
  );

  const initialState = useSelector(
    (state: { dailyWeather: [{}] }) => state.dailyWeather[0]
  );
  const [detailWeather, setDetailWeather] = useState(initialState);

  const initialActiveState = useSelector(
    (state: { dailyWeather: [{ dt: number }] }) => state.dailyWeather[0].dt
  );
  const [active, setActive] = useState<number>(initialActiveState);

  const getDetailWeather = (dt: number) => {
    dailyWeatherData.forEach((daily: { dt: number }) => {
      if (daily.dt === dt) {
        setDetailWeather(daily);
        setActive(dt);
      }
    });
  };

  interface DailyWeather {
    dt: number;
    weather: [{ icon: number }];
    temp: { min: number; max: number };
  }

  return (
    <React.Fragment>
      <div className={classes['week-weather']}>
        {dailyWeatherData.map((daily: DailyWeather) => (
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
                  alt="img"
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
