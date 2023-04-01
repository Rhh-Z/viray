import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';
// import Message from './message';

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
    // app.config.globalProperties.$message = Message;
  });
};

export default install;
export * from './components';
export { version };
