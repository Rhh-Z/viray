import "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { exports as s } from "../../_virtual/lodash.mjs";
class n extends Error {
  constructor(o) {
    super(o), this.name = "VirayError";
  }
}
function a(r, o) {
  throw new n(`[${r}] ${o}`);
}
function c(r, o) {
  if (process.env.NODE_ENV !== "production") {
    const t = s.isString(r) ? new n(`[${r}] ${o}`) : r;
    console.warn(t);
  }
}
export {
  c as debugWarn,
  a as throwError
};
