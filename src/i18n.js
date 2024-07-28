import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "homePage": "This is the front page"
    }
  },
  fi: {
    translation: {
      "home": "Etusivu",
      "about": "Tietoa Meistä",
      "homePage": "Tämä on etusivu"
    }
  }
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
