const buttonProps = {
  type: {
    type: String,
    default: () => "default",
    validator(value) {
      return ["default", "primary", "success", "info", "danger", "warning", "error"].includes(
        value
      );
    }
  },
  size: {
    type: String,
    default: () => "default",
    validator(value) {
      return ["large", "default", "small"].includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  circle: {
    type: Boolean,
    default: () => false
  },
  loading: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  active: {
    type: Boolean,
    default: () => false
  },
  text: {
    type: Boolean,
    default: () => false
  },
  autoFocus: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: String,
    default: () => ""
  },
  bg: {
    type: Boolean,
    default: () => false
  },
  nativeType: {
    type: String,
    default: () => "button",
    validator(value) {
      return ["button", "submit", "reset"].includes(value);
    }
  }
};
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
export {
  buttonEmits,
  buttonProps
};
