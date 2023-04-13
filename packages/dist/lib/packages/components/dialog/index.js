"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const dialog = require("./src/dialog.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViDialog = withInstall.withInstall(dialog.default);
exports.ViDialog = ViDialog;
exports.default = ViDialog;
