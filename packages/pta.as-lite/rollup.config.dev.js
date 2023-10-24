import ts from "rollup-plugin-ts";

export default {
  input: "src/Index.ts",
  output: {
    file: "dist/index.js",
  },
  plugins: [ts()],
};
