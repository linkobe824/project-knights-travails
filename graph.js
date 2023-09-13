export default function DirectedGraph() {
  const adjacencyList = new Map();
  let size = 0;

  function addNode(node) {
    adjacencyList.set(node, new Set());
    size++;
  }

  function addEdge(node1, node2) {
    adjacencyList.get(node1).add(node2);
  }

  function getNeighboors(node) {
    return adjacencyList.get(node);
  }

  function hasEdge(node1, node2) {
    return adjacencyList.get(node1).has(node2);
  }

  function getNumberOfVertices() {
    return size;
  }

  return {
    adjacencyList,
    addNode,
    addEdge,
    getNeighboors,
    hasEdge,
    getNumberOfVertices
  };
}
