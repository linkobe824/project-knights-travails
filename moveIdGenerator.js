export default function MoveIdGenerator() {
  function generateLegalMoves(x, y, bdSize) {
    const legalMoves = [];
    const moveOffset = [
      [-1, -2],
      [-1, 2],
      [-2, -1],
      [-2, 1],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (let move of moveOffset) {
      let newX = x + move[0];
      let newY = y + move[1];

      if (legalCoord(newX, bdSize) && legalCoord(newY, bdSize)) {
        legalMoves.push([newX, newY]);
      }
    }
    return legalMoves;
  }

  function legalCoord(coord, bdSize) {
    if (coord >= 0 && coord < bdSize) return true;
  }

  /**
   * Returns an array containing [coordX, coordY]
   * @param {number} id
   * @param {number} bdSize [board size]
   * @returns {Array}
   */
  function idToCoord(id, bdSize) {
    const x = id % bdSize;
    const y = Math.floor(id / bdSize);

    return [x, y];
  }

  function coordToId(row, col, bdSize) {
    return row * bdSize + col;
  }
  /**
   * Returns an array containing the Nodes {id, coordX, coordY} of each
   * legal movement from id (position).
   * @param {number} id
   * @param {number} bdSize
   * @returns {array}
   */
  function createArrOfNodesFromPosition(id, bdSize) {
    const coordX = idToCoord(id, bdSize)[0];
    const coordY = idToCoord(id, bdSize)[1];
    const moves = generateLegalMoves(coordX, coordY, bdSize);
    const movesArrId = [];

    for (let move of moves) {
      let nodeId = coordToId(move[1], move[0], bdSize);
      movesArrId.push(nodeId);
    }
    
    return movesArrId;
  }
  return {
    idToCoord,
    coordToId,
    createArrOfNodesFromPosition,
  };
}
