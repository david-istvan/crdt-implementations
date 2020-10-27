const path = require('path')

module.exports = {
  entry: {
    app: [
      './src/ModelServer.js',
      './src/GraphDoc.js',
      './src/YGraph.js',
      './src/Vertex.js',
      './src/YAbstractGraph.js',
      //'./src/graphtest.js',
      './src/modelservertest.js'
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/')
  },
}
