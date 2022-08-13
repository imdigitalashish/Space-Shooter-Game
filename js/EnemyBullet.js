import { enemySpaceShipBullet } from "./GameAssets.js"
import { Vector } from "./Vector.js"

export class EnemyBullet {
    constructor({ position }) {
        this.position = position
        this.velocity = new Vector(-13, 0)
        this.scalingFactor = 0.7;
        this.width = enemySpaceShipBullet.width * this.scalingFactor;
        this.height = enemySpaceShipBullet.height * this.scalingFactor;
    }

    render(ctx) {
        ctx.drawImage(enemySpaceShipBullet, this.position.x, this.position.y, this.width, this.height);
    }

    update(keys) {

        this.position = this.position.add(this.velocity);

    }

}