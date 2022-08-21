export class Score {
    constructor({ x, y, state }) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.state = state;

    }


    render(ctx) {
        console.log("rendering");

        ctx.save()
        ctx.translate(this.x, this.y);
        ctx.rotate(20 * Math.PI / 180);
        ctx.translate(-this.x, -this.y);
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = this.state == "success" ? `rgba(0,255, 0, ${this.opacity})` : `rgba(255, 0, 0, ${this.opacity})`
        ctx.fillText(this.state == "success" ? "+1" : "-1", this.x, this.y);
        ctx.restore()
        // ctx.fillStyle = "#000";
        // ctx.fillRect(this.x, this.y, 200, 200);

    }

    update(keys) {
        this.opacity -= 0.03;
        this.y--;
    }
}