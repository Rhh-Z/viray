const t = ["top", "middle", "bottom"], e = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], a = {
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  align: {
    type: String,
    values: t,
    default: "top"
  },
  justify: {
    type: String,
    values: e,
    default: "start"
  }
};
export {
  t as RowAlign,
  e as RowJustify,
  a as rowProps
};
