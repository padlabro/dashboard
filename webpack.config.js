const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  entry: { main: "./src/index.jsx" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader?name=/public/icons/[name].[ext]",
          options: {
            outputPath: "images"
          }
        }
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CopyPlugin([{ from: "public", to: "public" }])
  ]
};
