export function registerGameplayScene({ name, k, C }) {
	k.scene(name, () => {
		const boundary = k.add([
			k.rect(k.width() - C.padding[1], k.height() - C.padding[0], {
				radius: Math.min(k.width() - C.padding[1], k.height() - C.padding[0])/2,
			}),
			// k.ellipse(k.width() - C.padding[1], k.height() - C.padding[0]), this is not working debug when internet comes,
			k.anchor("center"),
			k.pos(k.width()/2, k.height()/2),
			k.outline(4, k.color(255, 0, 0)),
		]);
	});
}
