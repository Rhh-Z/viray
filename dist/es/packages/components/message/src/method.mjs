import { messageTypes } from "./message.mjs";
import MessageConstructor from "./message.vue.mjs";
import { isVNode, createVNode, render } from "vue";
import isFunction from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.mjs";
import isString from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
let seed = 1;
const instances = [];
let zIndex = 2e3;
const message = function(options = {}, context) {
  if (isString(options) || isVNode(options)) {
    options = { message: options };
  }
  const id = `message_${seed++}`;
  let offset = 20;
  instances.forEach((v) => {
    var _a;
    offset += ((_a = v.el) == null ? void 0 : _a.offsetHeight) + 16;
  });
  const props = {
    ...options,
    zIndex: zIndex++,
    id,
    offset,
    onClose: () => {
      close(id, options.onClose);
    }
  };
  const messageContent = props.message;
  const vm = createVNode(
    MessageConstructor,
    props,
    isFunction(messageContent) ? { default: messageContent } : isVNode(messageContent) ? { default: () => messageContent } : null
  );
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    render(null, container);
  };
  const container = document.createElement("div");
  render(vm, container);
  let appendTo = document.body;
  if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  } else if (options.appendTo && options.appendTo instanceof Element) {
    appendTo = options.appendTo;
  }
  appendTo.appendChild(container.firstElementChild);
  instances.push(vm);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = { message: options };
    }
    message({ ...options, type }, appContext);
  };
});
function close(id, userClose) {
  var _a;
  const idx = instances.findIndex((vm2) => vm2.props.id === id);
  if (idx === -1)
    return;
  const vm = instances[idx];
  userClose && userClose(vm);
  instances.splice(idx, 1);
  const removeHeight = vm.el.offsetHeight;
  for (let i = idx; i < instances.length; i++) {
    const pos = parseInt((_a = instances[i].el) == null ? void 0 : _a.style.top) - removeHeight + -16;
    instances[i].component.props.offset = pos;
  }
}
function closeAll() {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].component;
    (instance == null ? void 0 : instance.proxy).close();
  }
}
message.closeAll = closeAll;
message._context = null;
export {
  closeAll,
  message as default
};
