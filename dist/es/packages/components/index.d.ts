import type { App } from 'vue';
import { version } from './package.json';
declare const install: (app: App) => void;
export default install;
export * from './components';
export { version };
