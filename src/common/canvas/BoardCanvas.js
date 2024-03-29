import { useRef, useEffect } from "react";
import { roundRect } from "./roundRect";

import { BORDERMARGIN, BLOCKMARGIN, BLOCKSIDE,  } from "./constants";

function canvasBlockParams(block) {
	//coords system
	const name = block.name;
	const x = BORDERMARGIN + block.y * (BLOCKSIDE + BLOCKMARGIN);
	const y = BORDERMARGIN + block.x * (BLOCKSIDE + BLOCKMARGIN);
	const h = BLOCKSIDE * block.l + BLOCKMARGIN * (block.l - 1);
	const l = BLOCKSIDE * block.h + BLOCKMARGIN * (block.h - 1);
	const color = block.color ? block.color : name === "GG" ? "#C0C850" : "white";

	return { name, x, y, h, l, color };
}

function drawBlock(ctx, block) {
	const canvasBlock = canvasBlockParams(block);
	ctx.beginPath();
	ctx.fillStyle = canvasBlock.color;
	roundRect(ctx, canvasBlock.x, canvasBlock.y, canvasBlock.h, canvasBlock.l, 5, true);
	ctx.beginPath();
	ctx.font = "30px Arial";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.fillText(
		canvasBlock.name,
		canvasBlock.x + BLOCKSIDE / 2,
		canvasBlock.y + BLOCKSIDE / 2 + BORDERMARGIN
	);
	ctx.fill();
}

const BoardCanvas = (props) => {
	const { blocks, rows, cols, className, ...rest } = props;
	const canvasRef = useRef(null);
	let height =
		rows * BLOCKSIDE + (rows - 1) * BLOCKMARGIN + 2 * BORDERMARGIN;
	let width =
		cols * BLOCKSIDE + (cols - 1) * BLOCKMARGIN + 2 * BORDERMARGIN;
   
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const render = () => {
			canvas.width = width;
			canvas.height = height;
			context.fillStyle = "#449";
			context.fillRect(0, 0, context.canvas.width, context.canvas.height);

			for (let block of blocks) {
				if (block) {
					drawBlock(context, block);
				}
			}
		};
		render();
	}, [blocks, width, height]);

	return (
		<canvas
			className={className}
			ref={canvasRef}
			{...rest}
		/>
	);
};

export default BoardCanvas;
