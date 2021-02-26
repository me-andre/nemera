function findTargetCoordinates(sourceCoordinates, angle, distance) {
    const deltaX = Math.cos(angle) * distance;
    const deltaY = Math.sin(angle) * distance;
    const targetX = sourceCoordinates.x + deltaX;
    const targetY = sourceCoordinates.y + deltaY;
    const targetCoordinates = {};
    targetCoordinates.x = targetX;
    targetCoordinates.y = targetY;
    return targetCoordinates;
}
