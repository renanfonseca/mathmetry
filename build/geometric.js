"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angleToDegrees = angleToDegrees;
function angleToDegrees(angle) {
  return angle / (Math.PI / 180);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angleToRadians = angleToRadians;
function angleToRadians(angle) {
  return angle * (Math.PI / 180);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regularPolygonInteriorAangle = regularPolygonInteriorAangle;
/**
 * calculate the interior angle of a regular polygon
 * 
 * @param {Number} sides - number of sides of a regular polygon
 */
function regularPolygonInteriorAangle(sides) {
  return 180 * (sides - 2) / sides;
}
