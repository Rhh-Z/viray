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
    .pipe(dest(`${outputCjs}/packages/theme-chalk/src`))
    .pipe(dest(`${outputEsm}/packages/theme-chalk/src`));
};

// 打包字体
export const buildFonts = async () => {
  return src(`${themeChalkPath}/src/fonts/*`)
    .pipe(dest(`${outputCjs}/packages/theme-chalk/src/fonts`))
    .pipe(dest(`${outputEsm}/packages/theme-chalk/src/fonts`))
}

// 复制typing文件夹
export const copyTyping = async () => {
  return src(`${projRoot}/typings`)
    .pipe(dest(`${projRoot}/dist/es`))
    .pipe(dest(`${projRoot}/dist/lib`))
}

// 复制typing中的文件
export const copyTypingFile = async () => {
  return src(`${projRoot}/typings/*.d.ts`)
    .pipe(dest(`${projRoot}/dist/es/typings`))
    .pipe(dest(`${projRoot}/dist/lib/typings`))
}

export default series(
  removeDist,
  parallel(
    buildStyle,
    parallel(
      buildComponent,
      buildComponent,
      buildFonts,
      copyTyping,
    ),
    copyTypingFile
  )
);