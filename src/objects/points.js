export default function Points({ k, C }) {
	const random_pos = [
		k.rand(C.padding[1] * 2, k.width() - C.padding[1] * 2),
		k.rand(C.padding[0] * 2, k.height() - C.padding[0] * 2),
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
		points.exists() && k.destroy(points);
	});

	k.wait(C.points_stays, () => {
		points.exists() && k.destroy(points);
	});

	return points;
}
