import { createAsteroidBG } from "../objects/asteroid";
import { createStarBG } from "../objects/stars";

export function registerInstructionScene({ k, name, C }) {
	k.scene(name, () => {
		k.play("space", { loop: true });
		createStarBG({ k, C, num: 100 });
		createAsteroidBG({ k, C, num: 4 });

		const title = k.add([
			k.text("Instructions", {
				size: 48,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, 100),
			k.layer("ui"),
		]);

		const paragraph = k.add([
			k.text(
				"You are green rocket. And your goal is to protect against asteroids. You have your boundary and if you leave that your health decreases. \n\nYou can increase your speed by pressing 's'. Watch out for the stars and boosters spawning randomly on screen, catch them before they are gone.",
				{
					size: 22,
					width: 400,
					lineSpacing: 10,
					align: "center",
				}
			),
			k.anchor("top"),
			k.pos(k.width() / 2, title.pos.y + title.height / 2 + 32),
			k.layer("ui"),
		]);

		const hint = k.add([
			k.text("Press space to continue", {
				size: 26,
			}),
			k.anchor("top"),
			k.pos(k.width() / 2, paragraph.pos.y + paragraph.height + 100),
			k.scale(1),
			k.rotate(0),
			k.animate({ relative: true }),
			k.layer("ui"),
		]);

		hint.animate("angle", [0, -2, 0, 2, 0], {
			duration: 2,
		});
		hint.animate("scale", [1, 1.1, 0.9, 1], {
			duration: 1,
		});

		k.onKeyPress("space", () => {
			k.go("menu");
		});
	});
}
