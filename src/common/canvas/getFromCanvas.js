//https://stackoverflow.com/a/17130415/15088227
import { posToCoord } from "./posToCoord";

export function getPointPos(canvas, evt) {
	var rect = canvas.getBoundingClientRect(),
		scaleX = canvas.width / rect.width,
		scaleY = canvas.height / rect.height;

	if (evt.type.includes("touch")) {
		return {
			x: (evt.touches[0].clientX - rect.left) * scaleX,
			y: (evt.touches[0].clientY - rect.top) * scaleY,
		};
	} else if (evt.type.includes("mouse")) {
		return {
			x: (evt.clientX - rect.left) * scaleX,
			y: (evt.clientY - rect.top) * scaleY,
		};
	}
}

export function getPointCoords(canvas, evt) {
  const canvasPos = getPointPos(canvas, evt);
  return posToCoord(canvasPos.x, canvasPos.y);
}