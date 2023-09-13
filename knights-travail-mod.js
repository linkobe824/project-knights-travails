import DirectedGraph from './graph.js';
import MoveIdGenerator from './moveIdGenerator.js';

const SIZE = 8;

const knightGraph = DirectedGraph();
const move = MoveIdGenerator();

//bfs para crear los niveles hasta llegar a b
function knightMoveFromAtoB(a, b, graph, size) {
  createAdjacencyList(a, b, graph, size);
}

// Utiliza un algoritmo BFS para crear la lista de adyacencia
function createAdjacencyList(a, b, graph, size) {
  graph.addNode(a);
  let q = [a];
  while (true) {
    let position = q.shift();
    let moves = move.createArrOfNodesFromPosition(position, size);
    q.push(...moves);
    for (let move of moves) {
      if (!graph.adjacencyList.get(move)) graph.addNode(move);
      if (!graph.hasEdge(position, move)) graph.addEdge(position, move);
      if (move === b) return;
    }
  }
}

function allPosibleMoves(graph, size) {
    for(let i = 0; i < size * size; i++){
        let moves = move.createArrOfNodesFromPosition(i, size);
        graph.addNode(i)
        for(let move of moves){
            graph.addNode(move);
            graph.addEdge(0,move)
        }
    }
}
function shortestPath(graph, a, b, size) {

}

allPosibleMoves(knightGraph, SIZE);
console.log(knightGraph.adjacencyList)



// knightMoveFromAtoB(27, 28, knightGraph, SIZE);

// const someSet = [...knightGraph.getNeighboors(27)];

// for (let i = 0; i < someSet.length; i++){
//     console.log(someSet[i])
// }
