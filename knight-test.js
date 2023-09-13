import UnweightedGraph from "./unweightedGraph.js";
import MoveIdGenerator from "./moveIdGenerator.js";

const kinghtMovements = new UnweightedGraph();
const moveGen = MoveIdGenerator();
const SIZE = 8;

populate(kinghtMovements, SIZE);
addMovements(kinghtMovements, SIZE);

//poblar el grafo - cada cuadro del tablero es un vertice
function populate(graph, size) {
  for (let i = 0; i < size * size; i++) {
    graph.addVertex(i);
  }
}

// crear las conexiones de posibles movimientos de cada
// cuadro del tablero
function addMovements(graph, size) {
  for (let i = 0; i < size * size; i++) {
    let moves = moveGen.createArrOfNodesFromPosition(i, size);
    for (let move of moves) {
      graph.addEdge(i, move);
    }
  }
}

function shortestPath(graph, a, b, size) {
  const distance = new Array(size * size);
  const previous = new Array(size * size);
  const q = [];
  const visited = new Array(size * size);

  for (let vertex in graph.adjacencyList) {
    if (vertex == a) {
      distance[vertex] = 0;
      visited[vertex] = true;
    } else {
      distance[vertex] = Infinity;
      visited[vertex] = false;
      previous[vertex] = null;
    }
  }

  while (q) {}
}

shortestPath(kinghtMovements, 1, 2, 8);

function printBoard(size) {
  const boardSize = size * size;
  let line = "";
  let num = 0;
  for (let i = 0; i < size; i++) {
    num = boardSize - size * i;
    for (let j = size - 1; j >= 0; j--) {
      let curNum = num - j - 1;
      if (curNum < 10) {
        line += `  ${num - j - 1}`;
      } else {
        line += ` ${num - j - 1}`;
      }
    }
    line += "\n";
  }
  console.log(line);
}
