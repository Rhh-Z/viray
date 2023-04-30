import e from "../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
class n extends Error {
  constructor(o) {
    super(o), this.name = "VirayError";
  }
}
function s(r, o) {
  throw new n(`[${r}] ${o}`);
}
function c(r, o) {
  if (process.env.NODE_ENV !== "production") {
    const t = e(r) ? new n(`[${r}] ${o}`) : r;
    console.warn(t);
  }
}
export {
  c as debugWarn,
  s as throwError
};
