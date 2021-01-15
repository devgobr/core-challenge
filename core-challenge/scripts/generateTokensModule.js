/**
 * Gets all the .yaml files on src/tokens, converts to JSON and join all the properties
 * into a single object
 *
 * Ouput file: src/tokens/index.js
 */

const path = require('path');
const fs = require('fs');
const theo = require('theo');
const prettier = require('prettier');

const OUTPUT_FILENAME = 'index.ts';

const outputPath = path.resolve(__dirname, '../src/tokens', OUTPUT_FILENAME);
const designTokensDir = path.resolve(__dirname, '../src/tokens');
const tokenFiles = fs
  .readdirSync(designTokensDir)
  .filter(filename => filename.endsWith('.yml'));

let finalObject = '';

const promises = tokenFiles.map(tokenFile => {
  return theo
      .convert({
        transform: {
          type: 'web',
          file: path.resolve(designTokensDir, tokenFile),
        },
        format: {
          type: 'common.js'
        },
      })
      .then(obj => {
        finalObject = obj;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`Something went wrong: ${error}`);
        process.exit(1); // avoid more transformations
      })
  }
);

Promise.all(promises).then(() => {
  const output = `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
  export default ${finalObject.replace('module.exports = ', '').replace('};', '}')} as const;`;

  const formated = prettier.format(output, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'es5',
  });

  fs.writeFileSync(outputPath, formated);

  // eslint-disable-next-line no-console
  console.log('Successfully generated the tokens module');
});
