"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const withInstall = require("../../utils/withInstall.js");
const method = require("./src/method.js");
const ViMessage = withInstall.withInstallFunction(method.default, "$message");
exports.ViMessage = ViMessage;
exports.default = ViMessage;
