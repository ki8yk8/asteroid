import { createAsteroidBG } from "../objects/asteroid";
import { createStarBG } from "../objects/stars";

export function registerMenuScene({ name, k, C }) {
	k.scene(name, () => {
		createStarBG({ k, C, num: 200 });
		createAsteroidBG({ k, C, num: 30, scale: 0.6 });

		const text = k.add([
			k.text("Asteroids", {
				size: 72,
			}),
			k.pos(k.width() / 2, 100),
			k.anchor("center"),
			k.scale(1),
			k.rotate(0),
			k.animate({ relative: true }),
			k.layer("ui"),
		]);

		text.animate("angle", [0, 2.0, 0, -2.0, 0], {
			duration: 2,
		});
		text.animate("scale", [1, 1.1, 1], {
			duration: 1,
		});

		// add menu item below
		const menu_items = ["Start Game", "Sound: On", "Instructions"];
		const menu_objects = [];
		let selected_item = 0;
		menu_items.forEach((item, index) => {
			const menu_item = k.add([
				k.rect(400, 80, {
					radius: 20,
				}),
				k.pos(
					k.width() / 2,
					text.pos.y + text.height / 2 + 40 + 100 + index * (80 + 20)
				),
				k.outline(4),
				k.anchor("center"),
				k.layer("ui"),
			]);

			menu_item.add([
				k.text(item, { size: 32 }),
				k.anchor("center"),
				k.color(0, 0, 0),
				"text",
			]);

			menu_objects.push(menu_item);
		});
		menu_objects[0].scale = 1.1;

		k.onKeyPress("up", () => {
			selected_item = Math.max(0, selected_item - 1);
			handleChangeMenu(menu_objects, selected_item);
		});
		k.onKeyPress("down", () => {
			selected_item = Math.min(2, selected_item + 1);
			handleChangeMenu(menu_objects, selected_item);
		});

		k.onKeyPress("enter", () => {
			if (menu_items[selected_item] === "Sound: On") {
				const item = menu_objects[selected_item].get("text")[0];

				if (item.text === "Sound: On") {
					item.text = "Sound: Off";
				} else {
					item.text = "Sound: On";
				}
			}
		});
	});

	function handleChangeMenu(menu_objects, index) {
		if (index !== 0 && menu_objects[index - 1].scale > 1) {
			k.tween(1.1, 1, 0.25, (s) => (menu_objects[index - 1].scale = s));
		}
		k.tween(1, 1.1, 0.25, (s) => (menu_objects[index].scale = s));
		if (index !== 2 && menu_objects[index + 1].scale > 1) {
			k.tween(1.1, 1, 0.25, (s) => (menu_objects[index + 1].scale = s));
		}
	}
}
