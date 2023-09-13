import UnweightedGraph from './unweightedGraph.js';
import MoveIdGenerator from './moveIdGenerator.js';

const kinghtMovements = new UnweightedGraph();
const moveGen = MoveIdGenerator();
const SIZE = 8;

populate(kinghtMovements, SIZE);
addMovements(kinghtMovements, SIZE);
console.log(kinghtMovements);

//poblar el grafo - cada cuadro del tablero es un vertice
function populate(graph, size) {
  for (let i = 0; i < size * size; i++) {
    kinghtMovements.addVertex(i);
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

function printBoard(size) {
  const boardSize = size * size;
  let line = '';
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
    line += '\n';
  }
  console.log(line);
}
