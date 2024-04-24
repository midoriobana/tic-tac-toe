// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://gateway.marvel.com:443/v1/public',
  // we both know that this is not where the keys should come,
  // and we also know that they are stored on the server-side.
  // That's why they are here, but I am aware that in a real project,
  // this would never appear here.
  // ***
  // Nós dois(duas) sabemos que não é aqui que deveriam vir as chaves e
  // sabemos também que estas são armazenadas no server-side.
  // Por isso elas estão aqui, mas tenho ciência de que em um projeto real,
  // isso jamais apareceria aqui.
  apiKey: 'b8a1783abc05ce4872601d3fd516b47a',
  hash: '697ddb453055a908bd6cfe947c3182c7',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
