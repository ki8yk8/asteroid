import kaplay from "kaplay";
import { registerMenuScene } from "./scenes/menu";
import { registerGameoverScene } from "./scenes/gameover";
import { registerGameplayScene } from "./scenes/gameplay";
import { registerInstructionScene } from "./scenes/instructions";
import { registerLoaderScene } from "./scenes/loader";

const k = kaplay({ global: false, background: [61, 0, 129] });

k.loadRoot("./");

const CONSTANTS = {
	padding: [50, 100],
	rocket_speed: 100,
	bullet_speed: 200,
	background_color: { r: 61, g: 0, b: 129 },
	hit_decrease: 20,
	boost_decrease: 20, // percentage decrease per second
	points_stays: 5,
	points_spawn: 10,
	booster_spawn: 20,
	booster_stays: 6,
	life_spawn: 10,
	life_stays: 7,
	asteroid_increase: 1,
	level_up_time: 15,
	max_bullets: 50,
};

k.game = {
	score: 0,
	asteroids_capacity: 0,
	asteroids: 0,
	health: 100,
	boost: 50,
	bullets: 10,
};

k.setLayers(["background", "game-objects", "ui"], "game-objects");

registerMenuScene({ name: "menu", k, C: CONSTANTS });
registerInstructionScene({ name: "instructions", k, C: CONSTANTS });
registerGameplayScene({ name: "play", k, C: CONSTANTS });
registerGameoverScene({ name: "over", k, C: CONSTANTS });
registerLoaderScene({name: "loader", k, C:CONSTANTS});

k.go("loader");
