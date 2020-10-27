//import * as Y from 'yjs'
var Y = require('yjs')
//import { WebsocketProvider } from 'y-websocket'
var WebSocket = require('websocket');
var WebSocketClient = WebSocket.client;
var client = new WebSocketClient();
var connector;

//console.log(WebsocketProvider)

//console.log('creating doc')
const doc = new Y.Doc()
//console.log(doc)
const yarray = doc.getArray('my-array')
yarray.observe(event => {
  console.log('yarray was modified')
})
// every time a local or remote client modifies yarray, the observer is called
yarray.insert(0, ['val']) // => "yarray was modified"

//console.log('running client')

client.on('connect', function (connection) {
    connector = connection;
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        errorStr = error.toString();
        console.log("Connection Error: " + errorStr);
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }else{
            console.log("Received type: '", message.type, "'");
            console.log("Received: '" + message.toString() + "'");
        }
    });
    connection.send('hi2');
});

function ab2str(buf) {
    console.log('decoding')
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function connect() {
    client.connect('ws://localhost:8080', 'echo-protocol');
}

function sender(str) {
    connector.sendUTF(str);
}
connect();