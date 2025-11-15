import { createStarBG } from "../objects/stars";

export function registerGameoverScene({ name, k, C }) {
	k.scene(name, (score) => {
		createStarBG({k, C, num: 100});

		const title = k.add([
			k.text("Game over", {
				size: 48,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, k.height() / 4),
		]);

		const score_title = k.add([
			k.text("Your Scored", {
				size: 22,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, title.pos.y + title.height + 28),
		]);

		const score_number = k.add([
			k.text(score, {
				size: 72,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, score_title.pos.y + score_title.height + 30),
		]);

		const hint = k.add([
			k.text("Press space to continue", { size: 26 }),
			k.anchor("bot"),
			k.pos(k.width() / 2, k.height() - 100),
			k.rotate(0),
			k.scale(1),
			k.animate({ relative: true }),
		]);

		hint.animate("angle", [0, -1, 0, 1, 0], {
			duration: 3,
		});
		hint.animate("scale", [1, 1.05, 0.95, 1], {
			duration: 2,
		});

		k.onKeyPress("space", () => {
			k.go("menu");
		});
	});
}
