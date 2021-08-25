import React, { useState, Suspense } from 'react';
import classes from './WeatherContent.module.css';
import ErrorNotification from '../UI/ErrorNotification';
import ContentNav from '../ContentNav/ContentNav';
import Loading from '../UI/Loading';
import { useSelector } from 'react-redux';

const TodayWeather = React.lazy(() => import('../TodayWeather/TodayWeather'));
const WeekWeather = React.lazy(() => import('../WeekWeather/WeekWeather'));
const WeatherChart = React.lazy(() => import('../WeatherChart/WeatherChart'));

function WeatherContent() {
  const [tabs, setTabs] = useState(1);
  const error = useSelector((state) => state.errorData.error);

  const getActiveTabs = (index) => {
    setTabs(index);
  };

  return (
    <div className={classes['weather-content']}>
      {error && <ErrorNotification message={error} />}
      <ContentNav getActiveTabs={getActiveTabs} />
      <Suspense fallback={<Loading />}>
        <div>
          {tabs === 1 && <TodayWeather />}
          {tabs === 2 && <WeekWeather />}
          {tabs === 3 && <WeatherChart />}
        </div>
      </Suspense>
    </div>
  );
}

export default WeatherContent;
