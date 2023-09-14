import MoveIdGenerator from './moveIdGenerator.js';
import UnweightedGraph from './unweightedGraph.js';
import readlineSync from 'readline-sync';

const knightGraph = new UnweightedGraph();
const gen = MoveIdGenerator();

//Tamaño del tablero
const SIZE = 8;

main();

function main() {
    introduction();
    const input = getInputs();
    printPath(knightGraph, input[0], input[1], SIZE);
  }


//crear el grafo de "a" -> "b"
function createGraph(graph, a, b, size) {
  let node;
  let neighboors;
  let q = [a];
  let visited = new Array(size * size).fill(false);
  while (q.length > 0) {
    node = q.shift();
    if(!visited[node]){
        visited[node] = true;
        graph.addVertex(node);
        neighboors = gen.createArrOfNodesFromPosition(node, size);
        for (let neighboor of neighboors) {
          graph.addVertex(neighboor);
          graph.addEdge(node, neighboor);
          if (neighboor == b) return;
          q.push(neighboor);
        }
    }
  }
}

//camino mas corto
function shortestPath(graph, a, b, size) {
    let visited = new Array(size * size).fill(false);
    let previous = new Array(size * size).fill(null);
    let cost = new Array(size * size).fill(Infinity);
    // se crea una cola con los nodos vecinos de "a"
    let q = [...graph.adjacencyList[a]];
    // condiciones iniciales
    visited[a] = true;
    cost[a] = 0;
    for(let i of q) {
        cost[i] = 1;
        previous[i] = a;
    }
    
    let node;
    let dist;
    let neighboors;
    while(q.length > 0) {
        node = q.shift();
        if(node == b){
            return previous;
        }
        if(!visited[node]){
            visited[node] = true;
            neighboors = graph.adjacencyList[node];
            for (let neighboor of neighboors) {
                dist = cost[node] + 1;
                if(dist < cost[neighboor]){
                    cost[neighboor] = dist;
                    previous[neighboor] = node;
                    q.push(neighboor)
                }
            }
        }
    }
    return "There is no path";
}


function printPath(graph, a, b, size) {
    createGraph(graph, a, b, size);
    const previousNodeArray = shortestPath(graph,a,b,size)
    let current = b
    let next;
    let path = [];
    while (current != null) {
        path.push(current);
        next = previousNodeArray[current];
        current = next;
    }
    let line = "";
    for (let i of path.reverse()){
        line += i;
        if (i != b){
            line += " -> "
        }
    }
    console.log(`It takes ${path.length - 1} moves form ${a} to ${b}`)
    console.log(line);
}


  
  function introduction() {
    console.log("Kinght's Travail");
    console.log("Choose a position A and B from the following chess board");
    printBoard(SIZE);
  }
  
  function getInputs(){
    const start = readlineSync.question("A: ");
    const end = readlineSync.question("B: ")
    return [start, end];
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
  