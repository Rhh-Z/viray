import Progress from "./src/progress.vue.mjs";
import { withInstall } from "../../utils/withInstall.mjs";
const ViProgress = withInstall(Progress);
export {
  ViProgress,
  ViProgress as default
};
