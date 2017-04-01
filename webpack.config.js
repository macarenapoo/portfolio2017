var postCssSimpleVars = require("postcss-simple-vars"),
  autoprefixer = require("autoprefixer");

module.exports = {
  entry: './app/index.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  resolve: {
     extensions: ["", ".coffee", ".js", ".ubjsx", ".jsx", ".css"],
     modulesDirectories: ["node_modules", "app"]
   },
   resolveLoader: {
     modulesDirectories: ["node_modules"]
   },
  postcss: function postcss() {
    return [
      postCssSimpleVars(),
      autoprefixer({ browsers: ["last 4 versions"] })
    ];
  }
};
