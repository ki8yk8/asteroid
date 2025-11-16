import Asetroid, { createAsteroidBG } from "../objects/asteroid";
import { createStarBG } from "../objects/stars";

export function registerLoaderScene({ k, name, C }) {
	k.scene(name, async () => {
		createStarBG({ k, C, num: 50 });

		const sprites = [
			{
				name: "asteroid",
				path: "/sprites/asteroid.png",
			},
			{
				name: "asteroid-1",
				path: "/sprites/asteroids/1.png",
			},
			{
				name: "asteroid-2",
				path: "/sprites/asteroids/2.png",
			},
			{
				name: "asteroid-3",
				path: "/sprites/asteroids/3.png",
			},
			{
				name: "asteroid-4",
				path: "/sprites/asteroids/4.png",
			},
			{
				name: "asteroid-5",
				path: "/sprites/asteroids/5.png",
			},
			{
				name: "asteroid-6",
				path: "/sprites/asteroids/6.png",
			},
			{
				name: "asteroid-7",
				path: "/sprites/asteroids/7.png",
			},
			{
				name: "asteroid-8",
				path: "/sprites/asteroids/8.png",
			},
			{
				name: "asteroid-9",
				path: "/sprites/asteroids/10.png",
			},
			{
				name: "star",
				path: "/sprites/star.png",
			},
			{
				name: "booster",
				path: "/sprites/booster.png",
			},
			{
				name: "life",
				path: "sprites/life.png",
			},
		];

		const sounds = ["blast", "click", "earth", "laser", "space"];

		let total_loaded = 0;

		sprites.forEach(async (item) => {
			const { name, path } = item;
			await k.loadSprite(name, path);
			handleItemLoaded();
		});

		sounds.forEach(async (name) => {
			await k.loadSound(name, `/sounds/${name}.mp3`);
			handleItemLoaded();
		});

		const bar = k.add([
			k.rect(400, 50),
			k.anchor("center"),
			k.pos(k.width() / 2, k.height() / 2),
			k.color(255, 255, 255),
			k.layer("ui"),
		]);

		// range is from 0 to 390
		const inner_bar = bar.add([
			k.rect(1, 40),
			k.anchor("left"),
			k.pos(-bar.width / 2 + 5, 0),
			k.color(0, 0, 0),
		]);

		function handleItemLoaded() {
			total_loaded++;

			inner_bar.width = k.map(
				(total_loaded / (sounds.length + sprites.length)) * 100,
				0,
				100,
				0,
				390
			);

			if (total_loaded === sounds.length + sprites.length) {
				k.wait(1, () => k.go("menu"));
			}
		}
	});
}
