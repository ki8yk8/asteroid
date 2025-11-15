export function registerGameplayScene({ name, k, C }) {
	k.scene(name, () => {
		k.add([k.text("Game play"), k.color(0, 0, 0)]);
	});
}
