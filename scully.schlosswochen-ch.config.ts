import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { GetContentResponse } from './src/app/services/content.service';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'schlosswochen-ch',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/schlosswochen/:id': {
      serverTimeout: 300000,
      type: 'json',
      id: {
        url: 'https://new-schlosswochen.netlify.app/.netlify/functions/get-content',
        resultsHandler: (response: GetContentResponse) => response.message[0],
        property: ':id',
      },
    },
  },
};
