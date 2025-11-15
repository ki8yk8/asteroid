function tweenRocketAngle(k, rocket, to) {
	k.tween(rocket.angle, to, 0.5, (angle) => (rocket.angle = angle));
}

export default function Rocket({ k, C }) {
	let { rocket_speed } = C;

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
		rocket.move(0, -rocket_speed);
		tweenRocketAngle(k, rocket, 0);
	});
	k.onKeyDown("down", () => {
		rocket.move(0, rocket_speed);
		tweenRocketAngle(k, rocket, 180);
	});
	k.onKeyDown("left", () => {
		rocket.move(-rocket_speed, 0);
		tweenRocketAngle(k, rocket, -90);
	});
	k.onKeyDown("right", () => {
		rocket.move(rocket_speed, 0);
		tweenRocketAngle(k, rocket, 90);
	});

	k.onKeyDown("s", () => {
		rocket_speed = C.rocket_speed * 2	;

		k.wait(0.15, () => {
			rocket_speed = C.rocket_speed;
		});
	});

	return rocket;
}
