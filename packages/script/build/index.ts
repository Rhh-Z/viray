import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, projRoot, componentPath } from "../utils/paths";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
import { outputEsm, outputCjs, themeChalkPath } from "../utils/paths";
import minifyCss from 'gulp-minify-css'

//删除dist
export const removeDist = async () => {
  return delPath(`${projRoot}/dist`);
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

//打包样式
export const buildStyle = async () => {
  const sass = gulpSass(dartSass);
  return src(`${pkgPath}/theme-chalk/src/**.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(autoprefixer())
    .pipe(dest(`${outputCjs}/theme-chalk/src`))
    .pipe(dest(`${outputEsm}/theme-chalk/src`));
};

// 打包字体
export const buildFonts = async () => {
  return src(`${themeChalkPath}/src/fonts/*`)
    .pipe(dest(`${outputCjs}/theme-chalk/src/fonts`))
    .pipe(dest(`${outputEsm}/theme-chalk/src/fonts`))
}

export default series(
  removeDist,
  parallel(buildStyle, parallel(buildComponent, buildComponent, buildFonts))
);