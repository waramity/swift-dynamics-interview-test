import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translation.json';
import translationTH from './th/translation.json';

i18next.use(initReactI18next).init({
  lng: 'en', 
  debug: true,
  resources: {
    en: {
      translation,
    },
    th: {
      translationTH,
    },
  },
  fallbackLng: 'en', // Fallback language

  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;