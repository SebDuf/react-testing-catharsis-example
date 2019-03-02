import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';

import translations from './translations';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,

    resources: translations,

    defaultNS: 'general',
    fallbackNS: 'common',

    react: {
      defaultTransParent: 'span',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],

      excludeCacheFor: ['cimode'],
    },

    simplifyPluralSuffix: true,
  });

export { i18n };
