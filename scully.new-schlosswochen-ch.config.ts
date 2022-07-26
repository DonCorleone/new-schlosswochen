import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "schlosswochen-ch",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/schlosswochen/:id': {
      serverTimeout: 300000,
      type: 'json',
      id: {
        url: 'https://data.mongodb-api.com/app/schlosswochen-ch-tfxqz/endpoint/content',
        property: '_id',
      },
    },
  }
};
