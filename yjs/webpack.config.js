const path = require('path')

module.exports = {
  entry: {
    app: [
      './src/typesystem/logical/Node.js',
      './src/typesystem/logical/Model.js',
      './src/typesystem/logical/Entity.js',
      './src/typesystem/logical/Relationship.js',
      //'./src/distributed/ModelServer.js',
      //'./src/distributed/modelservertest.js',
      //'./src/distributed/synctest.js'
      './src/mindmap/MindmapModel.js',
      './src/mindmap/Mindmap.js',
      './src/mindmap/Topic.js',
      './src/mindmap/test.js'
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/')
  },
}
