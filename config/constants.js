import path from 'path';

const basePath = path.join(__dirname, '../');
const srcPath = path.join(basePath, 'src/');
const buildPath = path.join(basePath, 'build/');
const nodeModulesPath = path.join(basePath, 'node_modules/');
const indexHtmlPath = path.join(srcPath, 'index.html');

export {
  basePath,
  buildPath,
  indexHtmlPath,
  nodeModulesPath,
  srcPath,
};
