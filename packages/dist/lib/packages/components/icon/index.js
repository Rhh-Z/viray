"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const icon = require("./src/icon.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViIcon = withInstall.withInstall(icon.default);
exports.ViIcon = ViIcon;
exports.default = ViIcon;
