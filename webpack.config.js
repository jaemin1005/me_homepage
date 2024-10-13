// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const dotenv = require("dotenv").config();

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
    new HtmlInlineScriptPlugin(HtmlWebpackPlugin, [/bundle\.js$/]),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "babel-loader",
        exclude: ["/node_modules/"],
        options: {
          configFile: path.resolve(__dirname, "babel.config.json"),
          //plugins: ['@babel/plugin-transform-runtime']
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.devtool = "source-map";
    config.mode = "development";
  }
  return config;
};
