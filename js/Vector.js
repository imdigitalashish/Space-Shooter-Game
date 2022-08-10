export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        // console.log(vec.x + this.x);
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    multiply(vec) {
        return new Vector(this.x * vec.x, this.y * vec.y);
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    static from(magnitude, direction) {
        return new Vector(
            magnitude * Math.cos(direction),
            magnitude * Math.sin(direction)
        )
    }
}