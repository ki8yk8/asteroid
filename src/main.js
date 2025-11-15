import kaplay from "kaplay";
import { registerMenuScene } from "./scenes/menu";
import { registerGameoverScene } from "./scenes/gameover";
import { registerGameplayScene } from "./scenes/gameplay";

const k = kaplay({ global: false, background: [255, 255, 255] });

k.loadRoot("./");

const CONSTANTS = {
	padding: [50, 100],
};

registerMenuScene({ name: "menu", k, C: CONSTANTS });
registerGameplayScene({ name: "play", k, C: CONSTANTS });
registerGameoverScene({ name: "over", k, C: CONSTANTS });

k.go("play");
