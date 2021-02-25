import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-site",
  outDir: './dist/static',
  routes: {
  },
  handle404: 'index'
};