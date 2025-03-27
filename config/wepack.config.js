module.exports = {
    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/'
            }
          }
        }
      ]
    }
  }