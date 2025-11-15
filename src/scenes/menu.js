import { createAsteroidBG } from "../objects/asteroid";
import { createStarBG } from "../objects/stars";

export function registerMenuScene({ name, k, C }) {
	k.scene(name, () => {
		createStarBG({ k, C, num: 200 });
		createAsteroidBG({k, C, num: 30, scale: 0.6});
	});
}
