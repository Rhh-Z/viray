import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';
import ViMessage from './message';
import { ViNotification } from './components';

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    // @ts-ignore
    app.component(key, value);
    app.config.globalProperties.$message = ViMessage;
    app.config.globalProperties.$notify = ViNotification
  });
};


export default install;
export * from './components';
export { version };