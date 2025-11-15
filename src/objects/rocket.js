export default function Rocket({ k, C }) {
	const rocket = k.add([
		k.rect(32, 64),
		k.color(0, 0, 0),
		k.area(),
		k.pos(k.width() / 2, k.height() / 2),
		k.anchor("center"),
		"rocket",
	]);

	k.onKeyDown("up", () => {
		rocket.move(0, -40);
	});
	k.onKeyDown("down", () => {
		rocket.move(0, 40);
	});
	k.onKeyDown("left", () => {
		rocket.move(-40, 0);
	});
	k.onKeyDown("right", () => {
		rocket.move(40, 0);
	});

	return rocket;
}
