const RowAlign = ["top", "middle", "bottom"];
const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const rowProps = {
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
    values: RowAlign,
    default: "top"
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  }
};
export {
  RowAlign,
  RowJustify,
  rowProps
};
