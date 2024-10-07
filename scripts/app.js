//@ts-check
import { canvas, ctx} from "./common/canvas.js";
import { Player } from "./player.js"
import { SimpleGoodItem } from "./collectables/good.js";

let player = new Player();
player.draw();

let item1 = new SimpleGoodItem(canvas.width / 2, canvas.height / 2)

let lastTimeStamp = 0;

function gameLoop(timestamp) {
    let elapsedTime = timestamp - lastTimeStamp;
    lastTimeStamp = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();

    item1.update();
    item1.draw();

    window.requestAnimationFrame(gameLoop);
    }

window.requestAnimationFrame(gameLoop);