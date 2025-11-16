import Asetroid, { createAsteroidBG } from "../objects/asteroid";
import { createStarBG } from "../objects/stars";

export function registerLoaderScene({ k, name, C }) {
	k.scene(name, () => {
		createStarBG({ k, C, num: 50 });
		createAsteroidBG({k, C, num: 10});
	});
}
