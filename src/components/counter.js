function createBar({ k, counter }) {
	const MAX_BARS = 20;
	const [total_bars, gap] = [
		Math.min(Math.ceil((counter.data / 100) * MAX_BARS), MAX_BARS),
		1,
	];
	const bar_width = (counter.width - 2 * 5 - (MAX_BARS - 1) * gap) / MAX_BARS;

	for (let i = 0; i < total_bars; i++) {
		counter.add([
			k.rect(bar_width, counter.height - 10),
			k.color(0, 0, 0),
			k.pos(-counter.width + bar_width + 5 + i * (gap + bar_width), 5),
			k.anchor("topright"),
			"bars",
		]);
	}
}

export function Counter({ k, C, props }) {
	let previous = props.initial ?? 100;
	const top = k.add([
		k.text(props.title, {
			size: 16,
		}),
		k.pos(props.pos[0] - 5, props.pos[1]),
		k.anchor("topright"),
	]);

	const counter = k.add([
		k.rect(200, 50),
		k.pos(props.pos[0], props.pos[1] + top.height + 5),
		k.anchor(props.anchor ?? "center"),
		k.color(255, 255, 255),
		k.layer("ui"),
		props.name,
	]);
	counter.data = previous;

	createBar({ k, counter });

	k.onUpdate(() => {
		if (counter.data !== previous) {
			previous = counter.data;

			// delete all the bars
			counter.get("bars").forEach((bar) => {
				k.destroy(bar);
			});

			// create the new bars
			createBar({ k, counter });
		}
	});

	return counter;
}
