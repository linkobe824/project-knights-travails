function generateLegalMoves(x, y, bdSize) {
  const legalMoves = [];
  const moveOffset = [
    [1, 2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
  ];

  for (let i = 0; i < moveOffset.length; i++) {
    let newX = x + moveOffset[i][0];
    let newY = y + moveOffset[i][1];


        if (legalCoord(newX, bdSize) && legalCoord(newY, bdSize)) {
          legalMoves.push([newX, newY]);
        }
  }
    return legalMoves;
}

function legalCoord(coord, bdSize) {
  console.log(coord);
  if (coord >= 0 && coord < bdSize) return true;
}

console.log(generateLegalMoves(0, 0, 8));
