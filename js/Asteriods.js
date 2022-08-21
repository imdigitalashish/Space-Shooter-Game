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
        this.canShoot = false;
        this.angleRotatedBy = 0;
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.position.x + (this.width / 2), this.position.y + (this.height / 2))
        // ctx.rotate(this.angleByRotated)
        ctx.rotate(-this.angleRotatedBy * Math.PI / 180)
        ctx.translate(-(this.position.x + (this.width / 2)), -(this.position.y + (this.height / 2)))
        ctx.drawImage(asteriods, this.position.x, this.position.y, this.width, this.height);

        ctx.restore();

        // ctx.fillRect(this.position.x, this.position.y, 30, 30);
    }

    update(keys) {
        this.angleRotatedBy += 4;
        this.position = this.position.add(new Vector(-7, 0));
    }

}