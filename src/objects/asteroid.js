const ASTEROID_SIZE = {
	small: 0.2,
	medium: 0.25,
	large: 0.3,
};

function get_random_screen_pos(k) {
	// valid positions are around the screen
	// [x, 0], [0, y], [width, y], [0, height]
	const positions = [
		[k.rand(0, k.width()), 0],
		[0, k.rand(0, k.height())],
		[k.width(), k.rand(0, k.height())],
		[k.rand(0, k.width()), k.height()],
	];

	return k.choose(positions);
}

export default function Asetroid({ k, C, size = "medium" }) {
	const s = ASTEROID_SIZE[size];

	const rnd_pos = get_random_screen_pos(k);

	const asteroid = k.add([
		k.sprite("asteroid"),
		k.pos(rnd_pos[0], rnd_pos[1]),
		k.scale(s),
		k.anchor("center"),
		k.rotate(0),
		k.animate({ relative: true }),
		"asteroid",
	]);

	asteroid.animate("angle", [0, 360], {
		duration: 6,
	});

	// getting the rocket position
	const { x: r_x, y: r_y } = k.get("rocket")[0].pos;
	const [a_x, a_y] = rnd_pos;
	// unit vector towards the rocket
	const d = Math.sqrt((a_x - r_x) ** 2 + (a_y - r_y) ** 2);
	const [v_x, v_y] = [(r_x - a_x) / d, (r_y - a_y) / d];

	const scale = 70;
	asteroid.onUpdate(() => {
		asteroid.move(v_x * scale, v_y * scale);
	});

	return asteroid;
}

export function createAsteroidBG({ k, C }) {
	const N = 10;
	const all_sprites = Array(9)
		.fill(null)
		.map((_, index) => `asteroid-${index + 1}`);

	for (let i = 0; i < N; i++) {
		const [x, y] = [
			k.rand(C.padding[1], k.width() - C.padding[1]),
			k.rand(C.padding[0], k.height() - C.padding[0]),
		];
		k.add([
			k.sprite(k.choose(all_sprites), k.anchor("center")),
			k.pos(x, y),
			k.layer("background"),
			k.scale(0.25)
		]);
	}
}
