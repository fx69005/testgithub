// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  firebase: {
    apiKey: 'AIzaSyC0kI_oksH4kBTb4qM7cKIm9mo8PnUPSZ8',
    authDomain: 'projet-demo-new-bbd.firebaseapp.com',
    databaseURL: 'https://projet-demo-new-bbd.firebaseio.com',
    projectId: 'projet-demo-new-bbd',
    storageBucket: 'projet-demo-new-bbd.appspot.com',
    messagingSenderId: '661181088347'
  }
};
