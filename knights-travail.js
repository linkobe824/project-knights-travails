import DirectedGraph from './graph.js';
import MoveGenerator from './moveGenerator.js';
import Vertex from './vertex.js';

const SIZE = 8;

const knightGraph = DirectedGraph();
const move = MoveGenerator();

//bfs para crear los niveles hasta llegar a b
function knightMoveFromAtoB(a, b, graph, size) {
  createAdjacencyList(a, b, graph, size);
}

// Utiliza un algoritmo BFS para crear la lista de adyacencia
function createAdjacencyList(a, b, graph, size) {
  const initialPos = new Vertex(a, move.idToCoord(a, size));
  graph.addNode(initialPos);
  let q = [initialPos];
  while (true) {
    let position = q.shift();
    let moves = move.createArrOfNodesFromPosition(position.id, SIZE);
    q.push(...moves);
    for (let move of moves) {
        graph.addNode(move)
      if (!graph.hasEdge(position, move)) {
        graph.addEdge(position, move);
      }
      if (move.id === b) {
        return;
      }
    }
  }
}

function shortestPath(graph, a, b) {}

knightMoveFromAtoB(27, 28, knightGraph, SIZE);
console.log(knightGraph.adjacencyList)


