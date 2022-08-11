import { Asteroids } from "./js/Asteriods.js";
import { Bullet } from "./js/Bullet.js";
import { backgroundImage } from "./js/GameAssets.js";
import { Player } from "./js/Player.js";
import { Vector } from "./js/Vector.js";

const _ = (q) => document.querySelector(q);



class Game {

    player = new Player();


    elements = [this.player];

    keys = {};
    
    numberOfTicks = 0;

    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.85;
        this.canvas.style.backgroundColor = "black";
        requestAnimationFrame(this.render.bind(this));



        this.registerEventListeners();
        this.tiggerSpawnAsteroids();
    }

    registerEventListeners() {
        document.addEventListener("keydown", (e) => {
            this.keys[e.code] = true;

            if (e.code === "Space") {
                this.elements.push(this.player.shoot())
            }
        })
        document.addEventListener("keyup", (e) => {
            this.keys[e.code] = false;
        })
    }

    tiggerSpawnAsteroids() {
        this.elements.push(new Asteroids({ position: new Vector(this.canvas.width - 20, this.canvas.height - 200) }))
    }

    render(ts) {

        this.ctx.drawImage(backgroundImage, 0, 0, this.canvas.width, this.canvas.height)

        this.ctx.fillStyle = "rgba(0,0,0,0.3)"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        requestAnimationFrame(this.render.bind(this));
        this.update();
        this.elements.map((e) => e.render(this.ctx))
    }

    update() {
        this.elements.map((e, i) => {
            e.update(this.keys)
        })

        this.numberOfTicks++;

        if(this.numberOfTicks > 80) {
            this.tiggerSpawnAsteroids();
            this.numberOfTicks = 0;

        }
    }

}


window.addEventListener("load", () => {
    window.game = new Game()

})

