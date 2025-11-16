function tweenRocketAngle(k, rocket, to) {
	k.tween(rocket.angle, to, 0.15, (angle) => (rocket.angle = angle));
}
function toRadian(degree) {
	return (Math.PI / 180) * degree;
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
		const angle = toRadian(rocket.angle);
		rocket.move(rocket_speed * Math.sin(angle), -rocket_speed * Math.cos(angle));
	});
	k.onKeyDown("left", () => {
		const angle = rocket.angle;
		tweenRocketAngle(k, rocket, angle-40);
	});
	k.onKeyDown("right", () => {
		const angle = rocket.angle;
		tweenRocketAngle(k, rocket, angle+40);
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

		if (!rocket_in_boundary) {
			const counter = k.get("health-counter")[0];
			const new_health = k.game.health - 10 * k.dt();
			k.game.health = new_health;
			counter.data = new_health;
		}
	});

	// collision with the asteroid
	rocket.onCollide("asteroid", async (asteroid) => {
		const new_health = k.game.health - C.hit_decrease;

		if (new_health <= 0) {
			// if the rocket has no health left than destroy the rocket
			k.destroy(rocket);
			k.play("blast");
			k.go("over", k.game.score);
		} else {
			// if the rocket still has health than, destroy asteroid
			asteroid.active = false;
			k.play("earth");

			const emitter = k.add([
				k.pos(asteroid.pos),
				k.particles(
					{
						max: 80,
						speed: [40, 90],
						lifeTime: [1, 1.2],
						opacities: [1.0, 0.0],
						colors: [k.rgb(255, 214, 0), k.rgb(255, 95, 56)],
					},
					{
						direction: 0,
						spread: 360,
					}
				),
			]);
			emitter.emit(80);

			await k.tween(asteroid.scale, k.vec2(0, 0), 0.8, (s) => {
				asteroid.scaleTo(s);
			});
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
