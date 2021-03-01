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
  ]
}
