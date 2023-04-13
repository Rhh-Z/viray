const e = {
  tag: {
    type: String,
    default: "div"
  },
  /**
   * @description number of column the grid spans
   */
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  /**
   * @description number of columns that grid moves to the left
   */
  pull: {
    type: Number,
    default: 0
  },
  /**
   * @description number of columns that grid moves to the right
   */
  push: {
    type: Number,
    default: 0
  }
};
export {
  e as colProps
};
