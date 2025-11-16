export default function Life({ k, C }) {
	const random_pos = [
		k.rand(C.padding[1] * 2, k.width() - C.padding[1] * 2),
		k.rand(C.padding[0] * 2, k.height() - C.padding[0] * 2),
	];
	const life = k.add([
		k.sprite("life"),
		k.pos(random_pos[0], random_pos[1]),
		k.area(),
		k.scale(1),
		k.animate({ relative: true }),
		"life",
	]);

	life.animate("scale", [1, 1.6, 1], {
		duration: 5,
	});

	life.onCollide("rocket", () => {
		life.exists() && k.destroy(life);
		const counter = k.get("health-counter")[0];
		k.game.health += 25;

		counter.data = k.game.health;
	});

	k.wait(C.life_spawn, () => {
		life.exists() && k.destroy(life);
	})

	return life;
}
