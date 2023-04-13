const u = (t) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(t);
export {
  u as isKorean
};
