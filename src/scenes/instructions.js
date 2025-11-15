export function registerInstructionScene({ k, name, C }) {
	k.scene(name, () => {
		k.add([k.text("Instructions")]);
	});

	k.onKeyPress("space", () => {
		k.go("menu");
	});
}
