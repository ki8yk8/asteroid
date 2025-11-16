import { rotateVec, toRadian } from "../helpers/transform";

export default function Bullet({ k, C }) {
	const rocket = k.get("rocket", { recursive: true })[0];

	const angle = toRadian(rocket.angle);
	const bullet = k.add([
		k.rect(5, 20),
		k.color(255, 255, 255),
		k.pos(rocket.pos.add(rotateVec(0, -rocket.height / 2, angle))),
		k.rotate(0),
		k.anchor("bot"),
		k.area(),
		"bullet",
	]);
	bullet.angle = rocket.angle;

	k.play("laser");

	bullet.onUpdate(() => {
		bullet.move(rotateVec(0, -C.bullet_speed, angle));
	});

	return bullet;
}
