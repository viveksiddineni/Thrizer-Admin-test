// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: "https://thrizer-clinician-labshare-api.ci.aws.labshare.org/",
  tokenKey: "thrizer_admin",
  config: {
    AWS_BUCKET: "appinventiv-development",
    AWS_ACCESS_KEY: "AKIA6DQMUBGGY6CUWRG4",
    AWS_SECRET_KEY: "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",
    AWS_REGION: "us-east-1",
  },
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
