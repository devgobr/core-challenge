module.exports = api => {
  const isTest = api.env('test');

  const presetEnvDefault = {
    loose: true,
    modules: false,
    bugfixes: true,
  };

  return {
    presets: [
      [
        '@babel/preset-env',
        isTest
          ? {
              targets: {
                node: 'current',
              },
            }
          : presetEnvDefault,
      ],
      '@babel/typescript',
      '@babel/preset-react',
    ],
    plugins: ['babel-plugin-styled-components'],
  };
};
