import { playerBullet } from "./GameAssets.js";

export class Bullet {

    static bulletActualhit = 50;

    constructor({ position, angle }) {
        this.position = position;
        this.angle = angle
        this.velocity = { x: 15, y: 15 }
        this.scalingFactor = 0.8
        this.width = playerBullet.width * this.scalingFactor;
        this.height = playerBullet.height * this.scalingFactor;
    }


    render(ctx) {
        ctx.save()
        ctx.translate(this.position.x, this.position.y)
        ctx.rotate(this.angle * Math.PI / 180)
        ctx.translate(-this.position.x, -this.position.y);
        ctx.drawImage(playerBullet, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.restore()
    }

    update(key) {

        this.position.y += Math.sin(this.angle * Math.PI / 180) * this.velocity.y;
        this.position.x += Math.cos(this.angle * Math.PI / 180) * this.velocity.x;
        // this.position.y += Math.sin(80 * Math.PI / 180)

    }

}