var ExtractTextPlugin = require("extract-text-webpack-plugin"),
  postCssSimpleVars = require("postcss-simple-vars"),
  cssVariables = require("./src/css-variables.js"),
  autoprefixer = require("autoprefixer"),
  cssLoaderConfig = "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss-loader";

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
        loader: ExtractTextPlugin.extract(
         "style-loader", cssLoaderConfig
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
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
      postCssSimpleVars({variables: cssVariables}),
      autoprefixer({ browsers: ["last 4 versions"] })
    ];
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
};
