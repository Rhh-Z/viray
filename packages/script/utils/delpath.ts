import fs from 'fs';
import { resolve } from 'path';
// import { projRoot } from './paths';

//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
  }
  files.forEach(async (file) => {
    const curPath = resolve(path, file);

    if (fs.statSync(curPath).isDirectory()) {
      if (file != "node_modules") await delPath(curPath);
    } else {
      // delete file
      if (!stayFile.includes(file)) {
        fs.unlinkSync(curPath);
      }
    }
  });

  // if (path !== `${projRoot}/dist`) fs.rmdirSync(path);
}

export default delPath;