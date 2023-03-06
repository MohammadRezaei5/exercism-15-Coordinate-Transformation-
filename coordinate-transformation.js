/// look back again and again 🤐😐😑

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);

function translate2d(dx, dy) {
  return function translate(x, y) {
    return [x + dx, y + dy];
  };
}
// console.log(result);
