//@ts-check
import { CollectableItem } from "./collectable-base.js";

export class SimpleGoodItem extends CollectableItem {
    constructor(x = 0, y = 0) {
        super(x, y);

        this.width = 25;
        this.height = 25;

        this.despawnTime = 10 * 1000;
        this.spawnInTime = 5 * 1000;
        
        this.lastAlphaTime = 0;
        this.alpha = 0;

        this.lifeTime = 0;

        this.color = "hsla(122, 100%, 50%, 0%)";
    }
    update(elapsedTime) {
        this.lifeTime += elapsedTime;

        if(this.lifeTime < this.spawnInTime) {
            this.alpha = Math.floor((this.lifeTime / this.spawnInTime) * 100);
            this.color = `hsla(122, 100%, 50%, ${this.alpha}%)`;
        }

    }
}
