import UnweightedGraph from "./unweightedGraph.js";
import MoveIdGenerator from "./moveIdGenerator.js";

const kinghtMovements = new UnweightedGraph();
const moveGen = MoveIdGenerator();
const SIZE = 8;

populate(kinghtMovements, SIZE);
addMovements(kinghtMovements, SIZE);
printBoard(SIZE)
printMoves(kinghtMovements, 27, 28, SIZE);



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
  const distance = new Array(size * size).fill(0);
  const previous = new Array(size * size);
  const q = [];
  const visited = new Array(size * size);


  for (let vertex in graph.adjacencyList) {
    if (vertex == a) {
      distance[vertex] = 0;
      visited[vertex] = true;
      q.push(...[...graph.adjacencyList[vertex]]);
      // asinga distancia de 1 ("a" a vertex) a los vecineos de "a"
      for(let i of q) {
        distance[i] = 1;
        previous[i] = a;
      }
    } else {
      distance[vertex] = Infinity;
      visited[vertex] = false;
    }
    previous[vertex] = null;
  }

  // BFS modificado.
  let dist;
  let node;
  while (q.length > 0) {
    node = q.shift();
    if (!visited[node]){
      visited[node] = true;
      for (let neighboor of graph.adjacencyList[node]){
        dist = distance[node] + 1;
        if(dist < distance[neighboor]){
          distance[neighboor] = dist;
          previous[neighboor] = node;
        }
        if(neighboor == b){
          return [neighboor, previous];
        }
        q.push(neighboor);
      }
    }
  }
}

function printMoves(graph, a, b, size){
  const endAndPrevious = shortestPath(graph,a,b,size);
  let path = [];
  let cur = endAndPrevious[0];
  while(true){
    path.push(cur)
    if(cur == a) break;
    cur = endAndPrevious[1][cur];
  }
  let line = "";
  for(let node of path.reverse()){
    line += ` ${node} `
    if(node != b ){
      line += "->"
    }
  }

  console.log(`Kinght at ${a} took ${path.length - 1} moves to reach position ${b}`)
  console.log(line);

}

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

