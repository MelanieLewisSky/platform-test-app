module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
  presets: [
    [
      "@babel/preset-env",
      {
        // debug: true,
        targets: {
          chrome: "41",
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
