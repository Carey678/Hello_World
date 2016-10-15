var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
  'react/dist/react.min.js',
  'react-router/dist/react-router.min.js',
  'moment/min/moment.min.js',
  'underscore/underscore-min.js',
];

var config = {
  entry: ['webpack/hot/dev-server', './app/main.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {}
  },
  module: {
    noParse: [],
// Use the expose loader to expose the minified React JS
    // distribution. For example react-router requires this
    // 使用暴露全局加载器来暴露压缩版的 React JS，比如 react-router 需要这个。
    loaders: [{
      test: path.resolve(node_modules_dir, deps[0]),
      loader: "expose?React"
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]
  }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

