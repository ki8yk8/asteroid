export default function UI({ k, C, values }) {
	const UI = k.add([k.layer("ui")]);

	const score = UI.add([
		k.text("Score:", {
			size: 24,
		}),
		k.pos(C.padding[1] / 2, C.padding[0] / 2),
		k.color(255, 255, 255),
	]);

	const score_number = UI.add([
		k.text("10", {
			size: 24,
		}),
		k.pos(score.width + score.pos.x, score.pos.y),
		k.color(255, 255, 255),
	]);

	const health_score = UI.add([
		k.text("health", {
			size: 24,
		}),
		k.color(0, 0, 0),
		k.pos(k.width() - C.padding[1] / 2, C.padding[0] / 2),
		k.anchor("topright"),
		k.color(255, 255, 255),
	]);

	return UI;
}
