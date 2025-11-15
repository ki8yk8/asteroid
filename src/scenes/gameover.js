export function registerGameoverScene({ name, k, C }) {
	k.scene(name, () => {
		k.add([k.text("Game over"), k.color(0, 0, 0)]);
	});
}
