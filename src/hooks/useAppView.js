import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// resources
import { getCurrentLanguage } from '../common/translations/i18n';
import { showAppName } from '../common/utils/Utils';

export const useAppLanguage = () => {
  const currentLanguage = useSelector(
    store => store.AppReducer.currentLanguage,
  );

  useEffect(() => {
    getCurrentLanguage();
  }, [currentLanguage]);
};

export const useAppLoading = ({
  dependencies = [],
  timeout = 2000,
  changeLoading,
}) => {
  useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, timeout);
  }, dependencies);
};

export const useShowAppName = () => {
  useEffect(() => {
    showAppName();
  }, []);
};
