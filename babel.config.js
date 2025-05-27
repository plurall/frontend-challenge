module.exports = {
  presets: [
    /* to transfer any advansed ES to ES5 */
    '@babel/preset-env',
    [
      // to compile react to ES5
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
}
