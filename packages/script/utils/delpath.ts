import fs from 'fs';
import { resolve } from 'path';
// import { projRoot } from './paths';

//保留的文件
const stayFile = ["package.json", "README.md", "index.d.ts"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
  }

  // 删除所有的文件
  files.forEach(async (file) => {
    const curPath = resolve(path, file);

    if (fs.statSync(curPath).isDirectory()) {
      if (file !== "node_modules") await delPath(curPath);
    } else {
      // delete file
      if (!stayFile.includes(file)) {
        fs.unlinkSync(curPath);
      }
    }
  });

  // 如果存在dist文件夹，则直接删除dist内的所有内容
  // if (path !== `${projRoot}/dist`) fs.rmdirSync(path);
}

export default delPath;