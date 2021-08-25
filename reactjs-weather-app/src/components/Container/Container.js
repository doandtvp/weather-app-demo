import React from 'react';
import classes from './Container.module.css';
import CurrentCity from '../CurrentCity/CurrentCity';
import WeatherContent from '../WeatherContent/WeatherContent';

function Container() {
  return (
    <div className={classes.container}>
      <CurrentCity />
      <WeatherContent />
    </div>
  );
}

export default Container;
