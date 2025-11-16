export default function Booster({ k, C }) {
	const random_pos = [
		k.rand(C.padding[1] * 2, k.width() - C.padding[1] * 2),
		k.rand(C.padding[0] * 2, k.height() - C.padding[0] * 2),
	];
	const booster = k.add([
		k.sprite("booster"),
		k.anchor("center"),
		k.pos(random_pos[0], random_pos[1]),
		k.area(),
		k.scale(1),
		k.animate({ relative: true }),
		"booster",
	]);

	booster.animate("scale", [1, 1.5, 1], {
		duration: 3,
	});

	booster.onCollide("rocket", () => {
		k.game.boost = 100;
		const counter = k.get("boost-counter")[0];
		counter.data = 100;

		booster.exists() && k.destroy(booster);
	});

	k.wait(C.booster_stays, () => {
		booster.exists() && k.destroy(booster);
	});

	return booster;
}
