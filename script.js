import { Asteroids } from "./js/Asteriods.js";
import { Bullet } from "./js/Bullet.js";
import { asteriods, backgroundImage } from "./js/GameAssets.js";
import { Player } from "./js/Player.js";
import { Vector } from "./js/Vector.js";

const _ = (q) => document.querySelector(q);



class Game {

    player = new Player();


    elements = [this.player];
    enemyElements = [];
    shots = [];


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
                this.shots.push(this.player.shoot())
            }
        })
        document.addEventListener("keyup", (e) => {
            this.keys[e.code] = false;
        })
    }

    tiggerSpawnAsteroids() {
        this.enemyElements.push(new Asteroids({ position: new Vector(this.canvas.width - 20, this.canvas.height - 200) }))
    }

    render(ts) {

        this.ctx.drawImage(backgroundImage, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "rgba(0,0,0,0.3)"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        requestAnimationFrame(this.render.bind(this));



        this.elements.map((e) => e.render(this.ctx))
        this.enemyElements.map((e) => e.render(this.ctx));
        this.shots.map(e => e.render(this.ctx));

        this.update();

    }

    update() {
        this.elements.map((e, i) => {
            e.update(this.keys)
        })
        this.enemyElements.map((e) => e.update(this.keys));
        this.shots.map(e => e.update(this.keys));

        this.numberOfTicks++;

        if (this.numberOfTicks > 80) {
            this.tiggerSpawnAsteroids();
            this.numberOfTicks = 0;

        }

        this.playerCollisionCheckWithAsteroids();
        this.bulletsCollisionCheckWithAsteroids();
        this.clearEnemyElements();

    }


    clearEnemyElements() {
        this.enemyElements.forEach((enemy, index) => {
            if (enemy.position.x + enemy.width < 0) {
                this.enemyElements.splice(index, 1);
            }
        })
    }

    bulletsCollisionCheckWithAsteroids() {
        this.shots.forEach((bullet, bulletPos) => {
            this.enemyElements.forEach((enemy, enemyPos) => {
                // console.log(`${bullet.position.x + bullet.width} > ${enemy.position.x} && ${bullet.position.x + bullet.width} < ${enemy.position.x + enemy.width}`)
                if (bullet.position.x + bullet.width - Bullet.bulletActualhit > enemy.position.x &&
                    bullet.position.x + bullet.width < enemy.position.x + enemy.width &&
                    ((bullet.position.y > enemy.position.y && bullet.position.y < enemy.position.y + enemy.width))) {

                    this.shots.splice(bulletPos, 1);
                    this.enemyElements.splice(enemyPos, 1);

                }
            })
        })
    }


    playerCollisionCheckWithAsteroids() {
        this.enemyElements.forEach((enemy) => {
            // COLLISION CHECK 1
            if (enemy.position.x < this.player.pos.x + this.player.width &&
                enemy.position.x > this.player.pos.x &&
                ((enemy.position.y > this.player.pos.y &&
                    enemy.position.y < this.player.pos.y + this.player.height) ||
                    (enemy.position.y + enemy.height > this.player.pos.y &&
                        enemy.position.y + enemy.height < this.player.pos.y + this.player.height))
            ) {
                // console.log("collided");

            }
        })
    }

}


window.addEventListener("load", () => {
    window.game = new Game()

})

