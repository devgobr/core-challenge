const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');

const declarationsPath = path.resolve(__dirname, '../dist', 'types');

let modules = [];

try {
  modules = fs.readdirSync(declarationsPath);
} catch (err) {
  throw new Error(`Declaration folder not found at ${declarationsPath}`);
}

modules.forEach(module => {
  const targetFolderPath = path.resolve(__dirname, '..', module, 'dist/types');

  fs.copySync(path.resolve(declarationsPath, module), targetFolderPath);
  rimraf.sync(`${targetFolderPath}/**/*.stories.d.ts`);
  rimraf.sync(`${targetFolderPath}/**/__tests__`);
});
