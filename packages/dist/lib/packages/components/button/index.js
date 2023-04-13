"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button = require("./src/button.vue.js");
const withInstall = require("../../utils/withInstall.js");
const ViButton = withInstall.withInstall(button.default);
exports.ViButton = ViButton;
exports.default = ViButton;
