// Webpack uses this to work with directories
const path = require('path');
const SRC_DIR = path.join(__dirname, 'client');
const DIST_DIR = path.join(__dirname, 'public');

// This is the main configuration object.
// options to tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: `${SRC_DIR}/index.jsx`,
  // Path and filename of your result bundle.
  // Webpack bundle all JS into this file
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        }
      }
    ]
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: 'development'
};