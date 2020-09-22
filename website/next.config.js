const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx']
});
