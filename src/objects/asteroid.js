const ASTEROID_SIZE = {
	small: 0.2,
	medium: 0.25,
	large: 0.3,
};

export default function Asetroid({ k, C, size = "medium" }) {
	const w = ASTEROID_SIZE[size];

	const asteroid = k.add([k.sprite("asteroid"), k.scale(0.3)]);

	return asteroid;
}
