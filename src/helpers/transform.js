export function toRadian(degree) {
	return (Math.PI / 180) * degree;
}

export function rotateVec(x, y, angle) {
	const [cos, sin] = [Math.cos(angle), Math.sin(angle)];
	return [x * cos - y * sin, x * sin + y * cos];
}