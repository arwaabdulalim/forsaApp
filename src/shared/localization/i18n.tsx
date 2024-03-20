import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import {ar, en} from '../../i18n';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
