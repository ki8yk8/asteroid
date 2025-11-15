export function Counter({ k, C, props }) {
	const counter = k.add([
		k.rect(200, 50),
		k.pos(props.pos[0], props.pos[1]),
		k.anchor(props.anchor ?? "center"),
		k.color(255, 255, 255),
		k.layer("ui"),
	]);

	const [total_bars, gap] = [20, 1];
	const bar_width =
		(counter.width - 2 * 5 - (total_bars - 1) * gap) / total_bars;

	for (let i = 0; i < total_bars; i++) {
		counter.add([
			k.rect(bar_width, counter.height - 10),
			k.color(0, 0, 0),
			k.pos(-counter.width + bar_width + 5 + i * (gap + bar_width), 5),
			k.anchor("topright"),
		]);
	}

	return counter;
}
