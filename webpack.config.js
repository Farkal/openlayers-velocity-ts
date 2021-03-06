const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  target: 'node',
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  output: {
    filename: 'openlayers-velocity.js',
    path: path.resolve(__dirname, 'lib')
  }
};
