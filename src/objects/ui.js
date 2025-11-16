import { Counter } from "../components/counter";

export default function UI({ k, C }) {
	const UI = k.add([k.layer("ui")]);

	const score = UI.add([
		k.text("Score:", {
			size: 24,
		}),
		k.pos(C.padding[1] / 2, C.padding[0] / 2),
		k.color(255, 255, 255),
	]);

	const score_number = UI.add([
		k.text(k.game.score ?? 0, {
			size: 24,
		}),
		k.pos(score.width + score.pos.x, score.pos.y),
		k.color(255, 255, 255),
	]);

	const counter_pos = [k.width() - C.padding[1] / 2, C.padding[0] / 2];
	const anchor = "topright";
	const health_counter = Counter({
		k,
		C,
		props: {
			anchor,
			pos: counter_pos,
			title: "Health",
			name: "health-counter",
			initial: 100,
		},
	});
	const boost_counter = Counter({
		k,
		C,
		props: {
			anchor: "topright",
			pos: [C.padding[1] / 2 + 200, k.height() - C.padding[0] - 50],
			title: "Boost",
			name: "boost-counter",
			initial: 100,
		},
	});

	let previous = {
		...k.game,
	};
	k.onUpdate(() => {
		const game = k.game;
		const dependency = ["score"];

		dependency.forEach((depend) => {
			if (previous[depend] !== game[depend]) {
				// update the previous one
				previous = { ...game };

				if (depend === "score") {
					console.log(game.score);
					score_number.text = game[depend];
				}
			}
		});
	});

	return UI;
}
