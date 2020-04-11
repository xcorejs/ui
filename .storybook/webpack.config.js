const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules.unshift(path.resolve(__dirname, '../src'));
  config.resolve.alias = {
    ...config.resolve.alias,
    "@xcorejs/ui": path.resolve(__dirname, '../src')
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
