module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            "vue-style-loader",
            "postcss-loader",
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'),

        // All aliases in double to prevent sensitivy case typing conflicts
        // "@components": path.resolve(__dirname, 'src/Components'),
        // "@assets": path.resolve(__dirname, 'src/Assets'),
      }
    }
  };