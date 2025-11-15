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
		"asteroid",
	]);

	// getting the rocket position
	const { x: r_x, y: r_y } = k.get("rocket")[0].pos;
	const [a_x, a_y] = rnd_pos;
	// unit vector towards the rocket
	const d = Math.sqrt((a_x - r_x) ** 2 + (a_y - r_y) ** 2);
	const [v_x, v_y] = [(r_x-a_x) / d, (r_y-a_y) / d];

	const scale = 70;
	asteroid.onUpdate(() => {
		asteroid.move(v_x * scale, v_y * scale);
	});

	return asteroid;
}
