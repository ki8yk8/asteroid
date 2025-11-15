const COLOR = {
	light: [139, 133, 169],
	dark: [54, 29, 183],
};
export default function Star({ k, C, type, pos }) {
	const star = k.add([
		k.rect(6, 6, {
			radius: 3,
		}),
		k.color(...COLOR[type]),
		k.pos(...pos),
		k.anchor("center"),
		k.layer("background"),
	]);

	return star;
}

export function createStarBG({ k, C }) {
	const N = 100;

	for (let i = 0; i < N; i++) {
		Star({
			k,
			C,
			type: k.choose(["light", "dark"]),
			pos: [k.rand(0, k.width()), k.rand(0, k.height())],
		});
	}
}
