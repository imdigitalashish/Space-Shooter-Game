import { Bullet } from "./Bullet.js";
import { CONSTANTS } from "./constants.js";
import { backgroundSound, canvasBackground, playerShipSound, playerSpaceShip } from "./GameAssets.js";
import { Vector } from "./Vector.js";

export class Player {


    constructor() {
        console.log(playerSpaceShip.width);
        this.pos = new Vector(10, 10)
        this.velocity = new Vector(8, 8)
        this.scalingFactor = 0.4
        this.angleByRotated = 0;
        this.width = playerSpaceShip.width * this.scalingFactor
        this.height = playerSpaceShip.height * this.scalingFactor
        this.deltaAngle = 4



        this.fuelLevel = 20;
        this.fuelUsedInMovement = 0.02;

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

    checkForBoundaryCollision() {
        if (this.pos.y > CONSTANTS.canvasheight) {
            this.pos.y = 0;
        }
        if (this.pos.y + this.width < 0) {
            this.pos.y = CONSTANTS.canvasheight;
        }
        if (this.pos.x > CONSTANTS.canvaswidth) {
            this.pos.x = 0
        }

        if (this.pos.x + this.width < 0) {
            this.pos.x = CONSTANTS.canvaswidth;
        }
    }


    update(keys) {
        if (keys.KeyD) { this.angleByRotated += this.deltaAngle }
        if (keys.KeyW) {
            this.fuelLevel -= this.fuelUsedInMovement;
            this.pos = this.pos.add(new Vector(Math.cos(this.angleByRotated * Math.PI / 180) * this.velocity.x, Math.sin(this.angleByRotated * Math.PI / 180) * this.velocity.y))
        }
        if (keys.KeyS) {
            this.fuelLevel -= this.fuelUsedInMovement;
            this.pos = this.pos.add(new Vector(Math.cos(this.angleByRotated * Math.PI / 180) * -this.velocity.x, -Math.sin(this.angleByRotated * Math.PI / 180) * this.velocity.y))
        }
        if (keys.KeyA) { this.angleByRotated -= this.deltaAngle }
        // console.log(this.pos);

        if (keys.ArrowLeft) {
            this.angleByRotated -= this.deltaAngle;
        } else if (keys.ArrowRight) {
            this.angleByRotated += this.deltaAngle;
        }

        if (playerShipSound.currentTime >= 0.3) {
            playerShipSound.pause();
            playerShipSound.currentTime = 0;
        }
        this.checkForBoundaryCollision();

        this.updateFuelLevel();
        return false;
    }

    updateFuelLevel() {
        let percentage = this.fuelLevel / 20 * 100;
        if (this.fuelLevel < 0) {
            CONSTANTS.gameStarted = false;
            document.querySelector(".gameOverOverlay").style.display = "inline";
            backgroundSound.pause();
        }
        document.querySelector("#fuelProgress").style.width = percentage + "%";

    }

    shoot() {

        playerShipSound.play();
        return new Bullet({ position: { x: this.pos.x + this.width - this.width / 1.8, y: this.pos.y + this.height / 2.5 }, angle: this.angleByRotated })
    }

}