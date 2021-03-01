const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.unshift(path.resolve(__dirname, '../src'));

    const toPath = _path => path.join(process.cwd(), _path)

    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "@emotion/styled": toPath("node_modules/@emotion/styled"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    }

    return config;
  }
}
