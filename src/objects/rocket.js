function tweenRocketAngle(k, rocket, to) {
	k.tween(rocket.angle, to, 0.5, (angle) => (rocket.angle = angle));
}

export default function Rocket({ k, C }) {
	const rocket = k.add([
		k.rect(32, 64, {
			radius: [16, 16, 0, 0],
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
		tweenRocketAngle(k, rocket, 0);
	});
	k.onKeyDown("down", () => {
		rocket.move(0, C.rocket_speed);
		tweenRocketAngle(k, rocket, 180);
	});
	k.onKeyDown("left", () => {
		rocket.move(-C.rocket_speed, 0);
		tweenRocketAngle(k, rocket, -90);
	});
	k.onKeyDown("right", () => {
		rocket.move(C.rocket_speed, 0);
		tweenRocketAngle(k, rocket, 90);
	});

	return rocket;
}
