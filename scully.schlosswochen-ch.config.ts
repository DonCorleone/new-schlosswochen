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
    '/schlosswochen/Newsletter',
    '/schlosswochen/Start',
    '/schlosswochen/Schlosswochen',
    '/schlosswochen/Anmelden',
    '/schlosswochen/Impressionen',
    '/schlosswochen/Eckdaten',
    '/schlosswochen/Tagesplan',
    '/schlosswochen/Ort',
    '/schlosswochen/Details',
    '/schlosswochen/Verpflegung',
    '/schlosswochen/Team',
    '/schlosswochen/AGB',
    '/schlosswochen/Covid-19'
  ],
  routes: {
  },
};
