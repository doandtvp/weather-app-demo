import React from 'react';
import useConvertTime from '../../hooks/use-convert-time';
import classes from './DetailWeather.module.css';

interface IDetailWeather {
  detailWeather: {
    wind_speed: number;
    sunrise: number;
    sunset: number;
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
    };
    humidity: number;
    weather: [{ description: string }];

    pressure: number;
  };
}

function DetailWeather(props: IDetailWeather) {
  const detailWeather = props.detailWeather;
  const convertWindSpeed = (detailWeather.wind_speed * 3.6).toFixed(2);
  const sunrise_timestamp = useConvertTime(detailWeather.sunrise);
  const sunset_timestamp = useConvertTime(detailWeather.sunset);

  return (
    <div className={classes['detail-weather']}>
      <p>
        {new Date(detailWeather.dt * 1000).toLocaleDateString('en-GB', {
          weekday: 'short',
          day: 'numeric',
          month: 'numeric',
        })}
      </p>
      <div className={classes['detail-status']}>
        <div>
          <ul>
            <li>
              <p>Temp Detail: {detailWeather.temp.day}°C</p>
            </li>
            <li>
              <p>
                Temp: {detailWeather.temp.min}°C - {detailWeather.temp.max}
                °C
              </p>
            </li>
            <li>
              <p>Humidity: {detailWeather.humidity}%</p>
            </li>
            <li>
              <p>Wind Speed: {convertWindSpeed} km/h</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <p>Sunrise: {sunrise_timestamp}</p>
            </li>
            <li>
              <p>Sunset: {sunset_timestamp}</p>
            </li>
            <li>
              <p>Description: {detailWeather.weather[0].description}</p>
            </li>
            <li>
              <p>Atmospheric pressure: {detailWeather.pressure} hPa</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailWeather;
