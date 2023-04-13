"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
exports.isKorean = isKorean;
