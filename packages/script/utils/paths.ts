import { resolve } from "path";

//组件库根目录
export const projRoot = resolve(__dirname, "../../../");

//packages目录
export const pkgPath = resolve(__dirname, "../../");

// componentsPath
export const componentPath = resolve(__dirname, "../../components");

// theme-chalkPath
export const themeChalkPath = resolve(__dirname, '../../theme-chalk')

// output 
export const output = resolve(projRoot, "dist")
export const outputEsm = resolve(projRoot, "dist/es")
export const outputCjs = resolve(projRoot, "dist/lib")

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/element-plus` */
export const viOutput = resolve(buildOutput, 'viray')

// package.json
export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(projRoot, "package.json");