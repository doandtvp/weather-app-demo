import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeeklyWeather } from './store/fetchWeeklyWeatherAction';
import Loading from './components/UI/Loading';

const Container = React.lazy(() => import('./components/Container/Container'));

function App() {
  const coordData = useSelector((state) => state.coordData.coord);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeeklyWeather(coordData));
  }, [coordData, dispatch]);

  return (
    <div className='app'>
      <Suspense fallback={<Loading />}>
        <Container />
      </Suspense>
    </div>
  );
}

export default App;
