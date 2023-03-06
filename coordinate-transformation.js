/// look back again and again 🤐😐😑

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);

function translate2d(dx, dy) {
  return function translate(x, y) {
    return [x + dx, y + dy];
  };
}
// console.log(result);

///---///

// const doubleScale = scale2d(2, 2);
// const result = doubleScale(6, -3);

function scale2d(sx, sy) {
  return function scale(x, y) {
    return [x * sx, y * sy];
  };
}

// console.log(result);

///---///

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const doubleCoordinates = scale2d(2, 2);
// const composedTransformations = composeTransformation(
//   moveCoordinatesRight2Px,
//   doubleCoordinates
// );
// const result = composedTransformations(0, 1);

function composeTransform(f, g) {
  return function (x, y) {
    let res = f(x, y);
    return g(res[0], res[1]);
  };
}
