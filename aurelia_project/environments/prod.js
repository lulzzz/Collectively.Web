export default {
  debug: false,
  testing: false,
  title: 'Coolector',
  apiUrl: 'https://coolector.tk/api/',
  websocketUrl: 'ws://coolector.tk/signalr/hub',
  sessionStorageKey: 'session',
  filtersStorageKey: 'filters',
  locationStorageKey: 'location',
  defaultLanguage: 'en',
  constraints: {
    remarkPhotosLimit: 5
  },
  feature: {
    resolveRemarkPhotoRequired: false,
    resolveRemarkLocationRequired: false
  },
  facebook: {
    appId: '1827531987461765'
  },
  logLevel: 'info'
};
