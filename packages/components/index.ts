import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';
import ViMessage from './message';

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
    app.config.globalProperties.$message = ViMessage;
  });
};


export default install;
export * from './components';
export { version };
