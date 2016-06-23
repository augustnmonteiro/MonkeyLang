var path = require("path");

module.exports = {
  cache: true,
  resolve: {
    extensions: ["", ".js"],
    modules: ['node_modules']
  },
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    preLoaders: [
      {test: /src\/.+.js$/, loader: "eslint", exclude: /node_modules/}
    ],
    loaders: [
      {test: /src\/.+.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ["es2015"]}},
    ]
  },

  plugins: [],

  eslint: {
    failOnWarning: true,
    failOnError: true
  }
};

