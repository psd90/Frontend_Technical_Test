'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    apiKey: "AIzaSyDHll2K_Erf6g5ICNKxvAWPhrFhDUujIj0",
    authDomain: "clarustest-e31e1.firebaseapp.com",
    projectId: "clarustest-e31e1",
    storageBucket: "clarustest-e31e1.appspot.com",
    messagingSenderId: "708780330387",
    appId: "1:708780330387:web:1bc2e60ebcc7980d842c66",
    measurementId: "G-CJKJ52FJLP"
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
