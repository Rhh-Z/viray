"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const alert = require("./src/alert.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViAlert = withInstall.withInstall(alert.default);
exports.ViAlert = ViAlert;
exports.default = ViAlert;
