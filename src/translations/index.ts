import i18next from 'i18next';
import es_MX from './locales/es-MX.json';

i18next.init({
  lng: 'es-MX',
  debug: false,
  resources: {
    'es-MX': {
      translation: es_MX,
    },
  },
});

export { i18next };
