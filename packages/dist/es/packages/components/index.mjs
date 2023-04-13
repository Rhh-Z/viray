import * as components from "./components.mjs";
import { version } from "./package.json.mjs";
import { ViMessage } from "./message/index.mjs";
import { ViAlert } from "./alert/index.mjs";
import { ViButton } from "./button/index.mjs";
import { ViButtonGroup } from "./button-group/index.mjs";
import { ViCheckbox } from "./checkbox/index.mjs";
import { ViDialog } from "./dialog/index.mjs";
import { ViIcon } from "./icon/index.mjs";
import { ViInput } from "./input/index.mjs";
import { messageEmits, messageProps, messageTypes } from "./message/src/message.mjs";
import { ViProgress } from "./progress/index.mjs";
import { ViRow } from "./row/index.mjs";
import { ViCol } from "./col/index.mjs";
import { ViText } from "./text/index.mjs";
const install = function(app) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
    app.config.globalProperties.$message = ViMessage;
  });
};
export {
  ViAlert,
  ViButton,
  ViButtonGroup,
  ViCheckbox,
  ViCol,
  ViDialog,
  ViIcon,
  ViInput,
  ViMessage,
  ViProgress,
  ViRow,
  ViText,
  install as default,
  messageEmits,
  messageProps,
  messageTypes,
  version
};
