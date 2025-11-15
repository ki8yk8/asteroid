export function registerMenuScene({ name, k, C }) {
	k.scene(name, () => {
		k.add([k.text("Menu"), k.color(0, 0, 0)]);
	});
}
