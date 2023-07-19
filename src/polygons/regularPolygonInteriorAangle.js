/**
 * calculate the interior angle of a regular polygon
 * 
 * @param {Number} sides - number of sides of a regular polygon
 */
export function regularPolygonInteriorAangle(sides) {
    return (180 * (sides - 2)) / sides;
}