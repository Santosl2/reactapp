const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  // utiliza o path para evitar problema de compatibilidades de SO
  // arquivo de inicio
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    // arquivo que será gerado com o webpack
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: "./dist",
    },
    // contentBase: path.resolve(__dirname, "public"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        // expressão regular
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
