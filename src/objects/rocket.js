function tweenRocketAngle(k, rocket, to) {
	k.tween(rocket.angle, to, 0.5, (angle) => (rocket.angle = angle));
}

export default function Rocket({ k, C }) {
	let { rocket_speed } = C;

	let rocket_in_boundary = true;

	const rocket = k.add([
		k.rect(32, 64, {
			radius: [16, 16, 0, 0],
		}),
		k.color(70, 255, 24),
		k.rotate(0),
		k.anchor("center"),
		k.area(),
		k.pos(k.width() / 2, k.height() / 2),
		"rocket",
	]);

	const health_decrease_msg = k.add([
		k.rect(200, 50, {
			radius: 16,
		}),
		k.color(255, 0, 0),
		k.pos(k.width() / 2, 100),
		k.anchor("center"),
	]);
	health_decrease_msg.hidden = true; // first hidden because the rocket is inside the boundary

	health_decrease_msg.add([
		k.text("Remain inside", {
			size: 22,
		}),
		k.color(255, 255, 255),
		k.anchor("center"),
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
		rocket_speed = C.rocket_speed * 2;

		k.wait(0.15, () => {
			rocket_speed = C.rocket_speed;
		});
	});

	rocket.onCollide("boundary", () => {
		rocket_in_boundary = true;
	});
	rocket.onCollideEnd("boundary", () => {
		rocket_in_boundary = false;
	});

	rocket.onUpdate(() => {
		health_decrease_msg.hidden = rocket_in_boundary;
	});

	// collision with the asteroid
	rocket.onCollide("asteroid", (asteroid) => {
		const new_health = k.game.health - C.hit_decrease;

		if (new_health <= 0) {
			// if the rocket has no health left than destroy the rocket
			k.destroy(rocket);
			k.go("over", k.game.score);
		} else {
			// if the rocket still has health than, destroy asteroid
			k.destroy(asteroid);
			k.game.asteroids--;
			k.game.health = new_health;

			// update the health counter
			const counter = k.get("health-counter")?.[0];
			if (!counter) return;

			counter.data = k.game.health;
		}
	});

	return rocket;
}
