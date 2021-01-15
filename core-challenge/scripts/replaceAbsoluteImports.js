/**
 * This script replaces all the absolute imports of local modules with their local
 * position on final dist folders
 * e.g. "~components" -> "../../components"
 * The replacement is only done in the "components" modules
 */

const fs = require('fs');
const path = require('path');

const modulesToReplace = ['tokens'];

const files = [
  path.resolve(__dirname, '../components', 'dist', 'core-challenge-components.cjs.js'),
  path.resolve(__dirname, '../components', 'dist', 'core-challenge-components.esm.js'),
];

files.forEach(file => {
  const data = fs.readFileSync(file, 'utf8');
  let replacedData = data;

  modulesToReplace.forEach(module => {
    replacedData = replacedData.replace(`~${module}`, `../../${module}`);
  });

  fs.writeFileSync(file, replacedData, 'utf8');
});

// eslint-disable-next-line no-console
console.log(
  `Successfully replaced the absolute import of ${modulesToReplace.length} modules in ${files.length} files`
);
