import { fuelImage } from "./GameAssets.js";
import { Vector } from "./Vector.js";

export class Fuel {

    constructor({ position, fuelLevel }) {

        this.position = position;
        this.velocityOfCommingDown = new Vector(0, 4);
        this.scalingFactor = 0.1;
        this.width = fuelImage.width * this.scalingFactor;
        this.height = fuelImage.height * this.scalingFactor;
    }


    render(ctx) {
        ctx.drawImage(fuelImage, this.position.x, this.position.y, this.width, this.height);
    }

    update(keys) {

        this.position = this.position.add(this.velocityOfCommingDown);

    }

}