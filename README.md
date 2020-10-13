CRDT implementations for comparing the CollabServer with state-of-the-practice CRDT frameworks.

# Use cases
* Implement a CRDT Graph


# Initial requirements
* [Node.js 13.14.0](https://nodejs.org/en/)

# Automerge
* [Automerge GitHub repo](https://github.com/automerge/automerge)
* Graph implementation: https://github.com/david-istvan/crdt-implementations/blob/main/automerge/CRDTGraph.js
* Tests: https://github.com/david-istvan/crdt-implementations/blob/main/automerge/graphtest.js

To run the tests:

```
npm install automerge
node .\graphtest.js
```


# Yjs
* [Yjs GitHub repo](https://github.com/yjs/yjs)
