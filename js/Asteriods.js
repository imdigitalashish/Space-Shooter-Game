import { asteriods } from "./GameAssets.js";
import { Vector } from "./Vector.js";

export class Asteroids {

    // position = Vector
    constructor({ position }) {
        this.position = position
        this.velocity = { x: 20, y: 0 }
        this.numberOfHits = 0
        this.scalingFactor = 0.3
        this.width = asteriods.width * this.scalingFactor;
        this.height = asteriods.height * this.scalingFactor;
    }

    render(ctx) {
        ctx.drawImage(asteriods, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, 30, 30);
    }

    update(keys) {
        this.position = this.position.add(new Vector(-7, 0));
    }

}