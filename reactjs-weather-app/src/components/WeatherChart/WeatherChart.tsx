import React from 'react';
import classes from './WeatherChart.module.css';
import { useSelector } from 'redux-zero/react';
import { Line } from 'react-chartjs-2';

function WeatherChart() {
  const hourlyWeatherData = useSelector(
    (state: { hourlyWeather: [] }) => state.hourlyWeather
  );

  const temp: (number | null)[] = [];
  const feel: (number | null)[] = [];

  const setHours = hourlyWeatherData.map((hour: { dt: number }) => {
    let date = new Date(hour.dt * 1000);
    let hours = date.getHours();
    let minutes = '0' + date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < '10' ? '0' + minutes : minutes;
    let formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;

    return formattedTime;
  });

  const setTemp = hourlyWeatherData.map((hour: { temp: number }) => [
    ...temp,
    hour.temp,
  ]);
  const setFeel = hourlyWeatherData.map((hour: { feels_like: number }) => [
    ...feel,
    hour.feels_like,
  ]);

  const data = {
    labels: setHours,
    datasets: [
      {
        label: 'Temp (°C)',
        data: setTemp.flat(),
        fill: false,
        borderColor: 'crimson',
      },
      {
        label: 'Feel Like (°C)',
        data: setFeel.flat(),
        fill: false,
        borderColor: '#3cba9f',
      },
    ],
  };

  return (
    <div className={classes.chart}>
      <Line data={data} />
    </div>
  );
}

export default WeatherChart;
