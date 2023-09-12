import DirectedGraph from './graph.js';
import MoveGenerator from './moveGenerator.js';
import Node from './nodeDS.js';

const SIZE = 8;

const knightGraph = DirectedGraph();
const move = MoveGenerator();


function knightMoveFromAtoB(a, b, graph, size){
    const initialPos = new Node(a, move.idToCoord(a, size));
    graph.addNode(initialPos);
    
    let moves = move.createArrOfNodesFromMove(a,size);
    for (let move of moves) {
        graph.addEdge(initialPos, move);
    }
    return graph.adjacencyList
}



console.log(knightMoveFromAtoB(0, 34, knightGraph, SIZE));



