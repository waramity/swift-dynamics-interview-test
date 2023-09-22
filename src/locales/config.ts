import i18next, { i18n as i18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translation.json';
import translationTH from './th/translation.json';
import HttpApi from "i18next-http-backend";
import { languages, namespaces } from "./config.constants";

// const createI18n = (language: string): i18nInstance => {

// const i18n = i18next.createInstance().use(initReactI18next);

// i18next.use(HttpApi).init({
//   // lng: 'en', 
//   debug: true,
//   resources: {
//     'en': {
//       translation,
//     },
//     'th': {
//       translationTH,
//     },
//   },
//   // fallbackLng: 'en', // Fallback language
//   backend: {
//     loadPath: "./{{lng}}/{{ns}}.json", // Specify where backend will find translation files.
//   },
//   lng: language,
//   fallbackLng: language,
//   // ns: namespaces.common,

//   keySeparator: false,
//   interpolation: {
//     escapeValue: false,
//   },
// });
// return i18n;

// };


// // export default i18next;
// export const i18n = createI18n(languages.th);

i18next.use(initReactI18next).init({
  lng: 'en', 
  debug: true,
  resources: {
    'en': {
      translation,
    },
    'th': {
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