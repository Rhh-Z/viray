const t = {
  tag: {
    type: String,
    default: "span"
  },
  type: {
    type: String,
    default: "",
    validator(e) {
      return ["", "primary", "success", "info", "danger", "warning", "error"].includes(
        e
      );
    }
  },
  size: {
    type: String,
    default: "default",
    validator(e) {
      return ["large", "default", "small"].includes(e);
    }
  },
  kbd: {
    type: Boolean,
    default: !1
  },
  truncated: {
    type: Boolean,
    default: !1
  }
};
export {
  t as textProps
};
