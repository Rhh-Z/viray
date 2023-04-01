export const isNumber = (val: unknown) => typeof val === 'number';
export const isString = (val: unknown) => typeof val === 'string';
export const isBoolean = (val: unknown) => typeof val === 'boolean';
export const isFunction = (val: unknown) => typeof val === 'function';
export const isArray = (val: unknown) => Array.isArray(val);
export const isUndefined = (val: unknown) => typeof val === 'undefined';
export const isObject = (val: unknown) => Object.prototype.toString.call(val) === '[object Object]';