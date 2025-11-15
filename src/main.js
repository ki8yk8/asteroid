import kaplay from "kaplay";
import { registerMenuScene } from "./scenes/menu";
import { registerGameoverScene } from "./scenes/gameover";
import { registerGameplayScene } from "./scenes/gameplay";

const k = kaplay({ global: false, background: [61, 0, 129] });

k.loadRoot("./");

k.loadSprite("asteroid", "/sprites/asteroid.png");
k.loadSprite("asteroid-1", "/sprites/asteroids/1.png");
k.loadSprite("asteroid-2", "/sprites/asteroids/2.png");
k.loadSprite("asteroid-3", "/sprites/asteroids/3.png");
k.loadSprite("asteroid-4", "/sprites/asteroids/4.png");
k.loadSprite("asteroid-5", "/sprites/asteroids/5.png");
k.loadSprite("asteroid-6", "/sprites/asteroids/6.png");
k.loadSprite("asteroid-7", "/sprites/asteroids/7.png");
k.loadSprite("asteroid-8", "/sprites/asteroids/8.png");
k.loadSprite("asteroid-9", "/sprites/asteroids/10.png");

const CONSTANTS = {
	padding: [50, 100],
	rocket_speed: 100,
	background_color: { r: 61, g: 0, b: 129 },
};

k.game = {
	score: 0,
};

k.setLayers(["background", "game-objects", "ui"], "game-objects");

registerMenuScene({ name: "menu", k, C: CONSTANTS });
registerGameplayScene({ name: "play", k, C: CONSTANTS });
registerGameoverScene({ name: "over", k, C: CONSTANTS });

k.go("play");
