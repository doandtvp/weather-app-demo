import React from 'react';
import classes from './ErrorNotification.module.css';

function ErrorNotification(props) {
  return <div className={classes.error}>{props.message}</div>;
}

export default ErrorNotification;
