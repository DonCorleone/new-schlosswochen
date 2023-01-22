import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'schlosswochen-ch',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  extraRoutes: [
    '/Newsletter',
    '/Start',
    '/Schlosswochen',
    '/Anmelden',
    '/Impressionen',
    '/Eckdaten',
    '/Tagesplan',
    '/Ort',
    '/Details',
    '/Verpflegung',
    '/Team',
    '/AGB',
    '/Covid-19'
  ],
  routes: {
  },
};
