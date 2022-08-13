import { enemySpaceShip } from "./GameAssets.js";
import { Vector } from "./Vector.js";



export class EnemySpaceShip {

    constructor({ position }) {
        this.position = position;
        this.canShoot = true;
        this.velocity = new Vector(-8, 0)
        this.scalingFactor = 0.2;
        this.width = enemySpaceShip.width * this.scalingFactor;
        this.height = enemySpaceShip.height * this.scalingFactor;
    }

    render(ctx) {
        ctx.drawImage(enemySpaceShip, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(keys) {

        this.position = this.position.add(this.velocity);

    }

}