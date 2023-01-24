import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  ns: ['translationsNS'],
  defaultNS: 'translationsNS',
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: {en: {translationsNS: {}}},
});

export default i18n;
