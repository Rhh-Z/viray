"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const text = require("./src/text.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViText = withInstall.withInstall(text.default);
exports.ViText = ViText;
exports.default = ViText;
