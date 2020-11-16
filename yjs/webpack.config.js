const path = require('path')

module.exports = {
  entry: {
    app: [
      './src/typesystem/logical/Node.js',
      './src/typesystem/logical/Model.js',
      './src/typesystem/logical/Entity.js',
      './src/typesystem/logical/Relationship.js',
      './src/utils/ModelFactory.js',
      './src/utils/ModelDoc.js',
      //'./src/distributed/ModelServer.js',
      //'./src/distributed/modelservertest.js',
      //'./src/distributed/synctest.js'
      './src/mindmap/entities/MindMap.js',
      './src/mindmap/entities/Topic.js',
      './src/mindmap/entities/CentralTopic.js',
      './src/mindmap/entities/MainTopic.js',
      './src/mindmap/entities/SubTopic.js',
      './src/mindmap/entities/Marker.js',
      './src/mindmap/relationships/MindMap_CentralTopic_topic.js',
      './src/mindmap/relationships/MindMap_Marker_markers.js',
      './src/mindmap/relationships/CentralTopic_MainTopic_mainTopics.js',
      './src/mindmap/relationships/MainTopic_SubTopic_subTopics.js',
      './src/mindmap/relationships/Topic_Marker_marker.js',
      //'./src/typetests/typetests.js'
      './src/mindmap/test.js'
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/')
  },
}
