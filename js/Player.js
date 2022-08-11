import { Bullet } from "./Bullet.js";
import { playerSpaceShip } from "./GameAssets.js";
import { Vector } from "./Vector.js";

export class Player {


    constructor() {
        console.log(playerSpaceShip.width);
        this.pos = new Vector(10, 10)
        this.scalingFactor = 0.6
        this.angleByRotated = 0;
        this.width = playerSpaceShip.width * this.scalingFactor
        this.height = playerSpaceShip.height * this.scalingFactor

    }


    render(ctx) {
        ctx.save()
        ctx.translate(this.pos.x + (this.width / 2), this.pos.y + (this.height / 2))
        // ctx.rotate(this.angleByRotated)
        ctx.rotate(this.angleByRotated * Math.PI / 180)
        ctx.translate(-(this.pos.x + (this.width / 2)), -(this.pos.y + (this.height / 2)))
        ctx.drawImage(playerSpaceShip, this.pos.x, this.pos.y, this.width, this.height)

        // For Tracking Current Position
        ctx.fillStyle = "red";
        ctx.fillRect(this.pos.x + (this.width / 2), this.pos.y + (this.height / 2), 10, 10)

        ctx.restore()
    }


    update(keys) {
        if (keys.ArrowRight || keys.KeyD) { this.pos = this.pos.add(new Vector(3, 0)) }
        else if (keys.KeyW) { this.pos = this.pos.add(new Vector(0, -3)) }
        else if (keys.KeyS) { this.pos = this.pos.add(new Vector(0, 3)) }
        else if (keys.ArrowLeft || keys.KeyA) { this.pos = this.pos.add(new Vector(-3, 0)) }
        // console.log(this.pos);

        if (keys.ArrowUp) {
            this.angleByRotated -= 8;
        } else if (keys.ArrowDown) {
            this.angleByRotated += 8;
        }

        return false;
    }

    shoot() {
        console.log(this.pos.angle())
        return new Bullet({ position: { x: this.pos.x + this.width - this.width/1.8, y: this.pos.y + this.height/2.5 }, angle: this.angleByRotated})
    }

}