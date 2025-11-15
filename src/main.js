import kaplay from "kaplay";
import { registerMenuScene } from "./scenes/menu";
import { registerGameoverScene } from "./scenes/gameover";
import { registerGameplayScene } from "./scenes/gameplay";

const k = kaplay({ global: false, background: [61, 0, 129] });

k.loadRoot("./");

k.loadSprite("asteroid", "/sprites/asteroid.png");

const CONSTANTS = {
	padding: [50, 100],
	rocket_speed: 100,
	background_color: { r: 61, g: 0, b: 129 },
};

registerMenuScene({ name: "menu", k, C: CONSTANTS });
registerGameplayScene({ name: "play", k, C: CONSTANTS });
registerGameoverScene({ name: "over", k, C: CONSTANTS });

k.go("play");
