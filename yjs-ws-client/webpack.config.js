const path = require('path')

module.exports = {
  entry: {
    app: [
      './src/Client.js',
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/')
  },
}
