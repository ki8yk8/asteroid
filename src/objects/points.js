export default function Points({ k, C }) {
	const random_pos = [
		k.rand(C.padding[1], k.width() - C.padding[1]),
		k.rand(C.padding[0], k.height() - C.padding[0]),
	];

	const points = k.add([
		k.sprite("star"),
		k.pos(...random_pos),
		k.anchor("center"),
		k.area(),
		"point",
	]);

	points.onCollide("rocket", () => {
		k.game.score += 1;
		k.destroy(points);
	});

	return points;
}
