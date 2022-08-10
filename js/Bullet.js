export class Bullet {


    constructor({ position }) {
        this.position = position;
    }


    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
    }

    update(key) {

        this.position.x += 8;

    }

}