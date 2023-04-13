"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const progress = require("./src/progress.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViProgress = withInstall.withInstall(progress.default);
exports.ViProgress = ViProgress;
exports.default = ViProgress;
