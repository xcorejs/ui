const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  webpack (config, { dir, defaultLoaders }) {
    config.resolve.extensions.push('.svg');
    config.module.rules.push(svgLoaderRule(defaultLoaders, dir));

    return config;
  }
});

const svgLoaderRule = (defaultLoaders, dir) => ({
  test: /\.svg$/,
  include: [dir],
  exclude: /node_modules/,
  use: [
    defaultLoaders.babel,
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true
      }
    }
  ]
});
