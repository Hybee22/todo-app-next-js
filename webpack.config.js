module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    },
    {
      test: /\.scss$/,
      use: [{ loader: "style-loader" }, { loader: "sass-loader" }]
    }
  ]
};
