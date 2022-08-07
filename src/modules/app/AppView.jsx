import { useState } from 'react';

// components
import Router from '../router/Router';

// hooks
import { useAppLoading, useShowAppName, useAppLanguage } from '../../hooks';
import { useSelector } from 'react-redux';

const AppContainer = () => {
  const AppReducer = useSelector(store => store.AppReducer);
  const { isLoadingApp } = AppReducer;
  const [isLoading, setIsLoading] = useState(true);

  useAppLoading({
    changeLoading: value => setIsLoading(value),
  });

  useAppLanguage();

  useShowAppName();

  if (isLoading || isLoadingApp) {
    return (
      <div className='app-view'>
        <div className='loader'></div>
      </div>
    );
  }

  return <Router />;
};

export default AppContainer;
