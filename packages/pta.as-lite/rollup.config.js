import ts from "rollup-plugin-ts";
import compiler from "@ampproject/rollup-plugin-closure-compiler";

export default {
  input: "src/Index.ts",
  output: {
    file: "dist/index.js",
  },
  plugins: [ts(), compiler()],
};
