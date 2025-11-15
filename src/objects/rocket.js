export default function Rocket({ k, C }) {
	const rocket = k.add([
		k.rect(32, 64, {
			radius: [16, 16, 0, 0]
		}),
		k.color(0, 0, 0),
		k.area(),
		k.pos(k.width() / 2, k.height() / 2),
		k.rotate(0),
		k.anchor("center"),
		"rocket",
	]);

	k.onKeyDown("up", () => {
		rocket.move(0, -C.rocket_speed);
		rocket.angle = 0
	});
	k.onKeyDown("down", () => {
		rocket.move(0, C.rocket_speed);
		rocket.angle = 180
	});
	k.onKeyDown("left", () => {
		rocket.move(-C.rocket_speed, 0);
		rocket.angle = -90;
	});
	k.onKeyDown("right", () => {
		rocket.move(C.rocket_speed, 0);
		rocket.angle = 90;
	});

	return rocket;
}
