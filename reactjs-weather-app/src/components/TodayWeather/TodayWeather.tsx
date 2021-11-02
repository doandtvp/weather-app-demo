import React from 'react';
import classes from './TodayWeather.module.css';
import useConvertTime from '../../hooks/use-convert-time';
import { useSelector } from 'redux-zero/react';
import { FiSun } from 'react-icons/fi';
import { WiDayWindy, WiSunrise, WiSunset, WiHumidity } from 'react-icons/wi';
import { IoMdSpeedometer } from 'react-icons/io';
import { FaThermometerEmpty } from 'react-icons/fa';

function TodayWeather() {
  interface TodayWeather {
    date: number;
    icon: string;
    temp: number;
    description: string;
    mainWeather: string;
    status: number;
  }

  const todayWeatherData = useSelector(
    (state: { todayWeather: TodayWeather }) => state.todayWeather
  );

  const sunrise_timestamp = useConvertTime(todayWeatherData.sunrise);
  const sunset_timestamp = useConvertTime(todayWeatherData.sunset);
  const convertWindSpeed = (todayWeatherData.wind_speed * 3.6).toFixed(2);

  return (
    <div className={classes.content}>
      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>UV Index</p>
          <div className={classes['weather-status__img']}>
            <FiSun className={classes['yellow-icon-size']} />
            <p>{todayWeatherData.uvi}</p>
          </div>
        </div>
      </div>

      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>Wind Status</p>
          <div className={classes['weather-status__img']}>
            <WiDayWindy className={classes['blue-icon-size']} />
            <p>{convertWindSpeed} km/h</p>
          </div>
        </div>
      </div>

      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>Sunrise & Sunset</p>
          <div className={classes.sun}>
            <WiSunrise className={classes['yellow-icon-size']} />{' '}
            <span>{sunrise_timestamp}</span>
          </div>
          <div className={classes.sun}>
            <WiSunset className={classes['yellow-icon-size']} />{' '}
            <span>{sunset_timestamp}</span>
          </div>
        </div>
      </div>

      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>Humidity</p>
          <div className={classes['weather-status__img']}>
            <WiHumidity className={classes['blue-icon-size']} />
            <p>{todayWeatherData.humidity} %</p>
          </div>
        </div>
      </div>

      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>Visibility</p>
          <div className={classes['weather-status__img']}>
            <IoMdSpeedometer className={classes['yellow-icon-size']} />
            <p>{todayWeatherData.visibility / 1000} km</p>
          </div>
        </div>
      </div>

      <div className={classes.boxs}>
        <div className={classes['weather-status']}>
          <p>Pressure</p>
          <div className={classes['weather-status__img']}>
            <FaThermometerEmpty className={classes['blue-icon-size']} />
            <p>{todayWeatherData.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
