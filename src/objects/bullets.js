export default function Bullets({ k, C }) {
	const random_pos = [
		k.rand(C.padding[1] * 2, k.width() - C.padding[1] * 2),
		k.rand(C.padding[0] * 2, k.height() - C.padding[0] * 2),
	];
	const gun = k.add([
		k.sprite("gun"),
		k.pos(random_pos[0], random_pos[1]),
		k.area(),
		k.scale(1),
		k.animate({ relative: true }),
		"gun",
	]);

	gun.animate("scale", [1, 1.6, 1], {
		duration: 5,
	});

	gun.onCollide("rocket", () => {
		gun.exists() && k.destroy(gun);
		k.game.bullets += C.bullet_gain;
	});

	k.wait(C.bullet_stays, () => {
		gun.exists() && k.destroy(gun);
	});

	return gun;
}
