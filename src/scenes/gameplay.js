import Asetroid from "../objects/asteroid";
import Rocket from "../objects/rocket";

export function registerGameplayScene({ name, k, C }) {
	k.scene(name, () => {
		const boundary = k.add([
			k.rect(k.width() - C.padding[1], k.height() - C.padding[0], {
				radius:
					Math.min(k.width() - C.padding[1], k.height() - C.padding[0]) / 2,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, k.height() / 2),
			k.color(...Object.values(C.background_color)),
			k.outline(4, {r: 255, g: 157, b: 24}),
			k.area(),
			"boundary",
		]);

		console.log(k.RED);

		const rocket = Rocket({ k, C });
		// Asetroid({ k, C, size: "small" });
		// Asetroid({ k, C, size: "medium" });
		Asetroid({ k, C, size: "large" });
	});
}
