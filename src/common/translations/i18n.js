import { I18n } from 'i18n-js';

// languages
import spanish from './languages/spanish.js';
import english from './languages/english.js';

const i18n = new I18n({
  en: english,
  es: spanish,
});

/**
 * @param name
 * @param params
 */

const strings = (name, params = {}) => i18n.t(name, params);

let currentLanguage = JSON.parse(localStorage.getItem('persist:root'));

if (currentLanguage) {
  currentLanguage = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root'))?.AppReducer,
  )?.currentLanguage;
}

const initLanguage = () => {
  return currentLanguage || 'en';
};

const changeLanguage = async language => {
  i18n.locale = language || 'en';
};

const getCurrentLanguage = () => {
  return i18n.locale || 'en';
};

const getLanguages = () => {
  return { es: 'es', en: 'en' };
};

i18n.locale = initLanguage();

const initTranslations = () => {
  return i18n; // return all information from i18n
};

export {
  initTranslations,
  strings,
  changeLanguage,
  getCurrentLanguage,
  getLanguages,
};
