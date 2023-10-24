const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");

const env = process.env.ENVIRONMENT;
const isProd = env === "production";
console.log("ENVIRONMENT:", env);

const envVars = Object.keys(process.env).reduce((vars, key) => {
  if (key.startsWith("APP_")) {
    vars[`process.env.${key}`] = JSON.stringify(process.env[key]);
  }
  return vars;
}, {});

// https://webpack.js.org/configuration/#options
module.exports = {
  mode: isProd ? "production" : "development",
  devtool: !isProd && "inline-source-map",
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
    moduleIds: "named",
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "module",
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: ["static/**/*"],
    }),
    // https://webpack.js.org/plugins/define-plugin/
    new DefinePlugin({
      "process.env.STUFF": JSON.stringify(process.env.STUFF),
      "process.env.INBROWSER": JSON.stringify(process.env.INBROWSER),
      ...envVars,
    }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /node_modules/,
    },
  ],
  devServer: {
    static: [
      {
        directory: "static",
        publicPath: "/static",
      },
      {
        directory: "../../node_modules/@sky-uk/lightning-fonts/assets",
        publicPath: "/assets",
      },
    ],
    port: 8080,
    hot: false,
  },
  stats: {
    assets: true,
    warnings: true,
    errors: true,
    errorDetails: true,
  },
};
