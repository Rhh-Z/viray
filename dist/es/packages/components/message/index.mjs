import { withInstallFunction } from "../../utils/withInstall.mjs";
import message from "./src/method.mjs";
const ViMessage = withInstallFunction(message, "$message");
export {
  ViMessage,
  ViMessage as default
};
