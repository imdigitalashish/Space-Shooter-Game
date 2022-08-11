
export class Bullet {


    constructor({ position, angle }) {
        this.position = position;
        this.angle = angle
        this.velocity = { x: 8, y: 8 }
    }


    render(ctx) {
        ctx.save()
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.restore()
    }

    update(key) {

        this.position.y += Math.sin(this.angle * Math.PI / 180) * this.velocity.y;
        this.position.x += Math.cos(this.angle * Math.PI / 180) * this.velocity.x;
        // this.position.y += Math.sin(80 * Math.PI / 180)

    }

}