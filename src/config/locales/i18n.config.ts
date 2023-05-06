import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import lenguages from './langs';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: ['en', 'es'],
  compatibilityJSON: 'v3',
  ns: ['translationsNS'],
  defaultNS: 'translationsNS',
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: lenguages,
});
export default i18n;

/**
 * if you define a word like this TEXT: 'you are {{word}}'
 * so you can use t('TEXT', {word: 'WonderFull'})
 */
