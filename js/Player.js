import { playerSpaceShip } from "./GameAssets.js";
import { Vector } from "./Vector.js";

export class Player {


    constructor() {
        console.log(playerSpaceShip.width);
        this.pos = new Vector(10, 10)
        this.scalingFactor = 0.5;

    }


    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.drawImage(playerSpaceShip, this.pos.x, this.pos.y, playerSpaceShip.width * this.scalingFactor, playerSpaceShip.height * this.scalingFactor)
    }


    update(keys, ctx) {
        if (keys.ArrowRight || keys.KeyD) { this.pos = this.pos.add(new Vector(3, 0)) }
        else if (keys.KeyW) { this.pos = this.pos.add(new Vector(0, -3)) }
        else if (keys.ArrowDown || keys.KeyS) { this.pos = this.pos.add(new Vector(0, 3)) }
        else if (keys.ArrowLeft || keys.KeyA) { this.pos = this.pos.add(new Vector(-3, 0)) }
        // console.log(this.pos);

        if (keys.ArrowUp) {
            console.log("hello");
            ctx.save();
       
            ctx.restore();
        }

        return false;
    }

}