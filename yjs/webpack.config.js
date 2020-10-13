const path = require('path')

module.exports = {
  entry: {
    app: [
      './src/YGraph.js',
      './src/GraphDoc.js',
      './src/graphtest.js',
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/')
  },
}
