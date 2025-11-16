import Asetroid, { createAsteroidBG } from "../objects/asteroid";
import Booster from "../objects/booster";
import Bullet from "../objects/bullet";
import Life from "../objects/life";
import Points from "../objects/points";
import Rocket from "../objects/rocket";
import { createStarBG } from "../objects/stars";
import UI from "../objects/ui";

export function registerGameplayScene({ name, k, C }) {
	k.scene(name, () => {
		k.play("space", { loop: true });
		const boundary = k.add([
			k.rect(k.width() - C.padding[1], k.height() - C.padding[0], {
				radius:
					Math.min(k.width() - C.padding[1], k.height() - C.padding[0]) / 2,
			}),
			k.anchor("center"),
			k.pos(k.width() / 2, k.height() / 2),
			k.color(...Object.values(C.background_color)),
			k.outline(4, { r: 255, g: 157, b: 24 }),
			k.area(),
			k.layer("bakground"),
			"boundary",
		]);

		const ui = UI({ k, C });
		const rocket = Rocket({ k, C });
		k.onKeyPress("space", () => {
			Bullet({ k, C });
		});

		createStarBG({ k, C });
		createAsteroidBG({ k, C });

		k.loop(C.points_spawn, () => Points({ k, C }));
		k.loop(C.life_spawn, () => Life({ k, C }));

		k.loop(C.level_up_time, () => {
			k.game.asteroids_capacity += C.asteroid_increase;
		});

		k.loop(C.booster_spawn, () => {
			Booster({ k, C });
		});

		k.onUpdate(() => {
			if (k.game.asteroids < k.game.asteroids_capacity) {
				k.game.asteroids++;
				k.wait(0.25, () => Asetroid({ k, C }));
			}

			if (k.game.health <= 0) {
				k.go("over", k.game.score);
			}
		});
	});
}
