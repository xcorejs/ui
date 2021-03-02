const path = require('path');
const fs = require('fs');

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

    // Weird storybook/emotion/emotion-icons bug. https://github.com/storybookjs/storybook/issues/13277#issuecomment-765525245
    const toPath = _path => path.join(process.cwd(), _path)
    function getPackageDir(filepath) {
      let currDir = path.dirname(require.resolve(filepath));
      while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
          return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
          throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
      }
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": getPackageDir("@emotion/react"),
      "@emotion/styled": getPackageDir("@emotion/styled"),
      "emotion-theming": getPackageDir("@emotion/react"),
    }

    return config;
  }
}
