export default function DirectedGraph() {
  const adjacencyList = new Map();

  function addNode(node) {
    adjacencyList.set(node, new Set());
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

  return {
    adjacencyList,
    addNode,
    addEdge,
    getNeighboors,
    hasEdge,
  };
}
