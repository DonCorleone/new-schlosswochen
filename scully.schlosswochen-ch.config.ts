import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { GetContentResponse } from './src/app/services/content.service';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'schlosswochen-ch',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  extraRoutes: [
    '/schlosswochen',
    '/schlosswochen/newsletter',
    '/schlosswochen/start',
    '/schlosswochen/schlosswochen',
    '/schlosswochen/anmelden',
    '/schlosswochen/impressionen',
    '/schlosswochen/eckdaten',
    '/schlosswochen/tagesplan',
    '/schlosswochen/ort',
    '/schlosswochen/details',
    '/schlosswochen/verpflegung',
    '/schlosswochen/team',
    '/schlosswochen/agb',
    '/schlosswochen/covid19',
    '/schlosswochen/success'
  ],
  routes: {
  },
};
