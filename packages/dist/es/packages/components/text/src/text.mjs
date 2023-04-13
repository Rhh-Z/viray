const textProps = {
  tag: {
    type: String,
    default: "span"
  },
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "primary", "success", "info", "danger", "warning", "error"].includes(
        value
      );
    }
  },
  size: {
    type: String,
    default: "default",
    validator(value) {
      return ["large", "default", "small"].includes(value);
    }
  },
  kbd: {
    type: Boolean,
    default: false
  },
  truncated: {
    type: Boolean,
    default: false
  }
};
export {
  textProps
};
