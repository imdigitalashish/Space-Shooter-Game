let canvasBackground = new Image();
canvasBackground.src = "assets/bg.jpg";

let playerSpaceShip = new Image();
playerSpaceShip.src = "assets/spaceship.png";

let playerShipSound = new Audio();
playerShipSound.src = "sounds/gunsound.mp3"

let asteriods = new Image();
asteriods.src = "assets/meteor.png";

let playerBullet = new Image();
playerBullet.src = "assets/bullet.png";

let enemySpaceShip = new Image();
enemySpaceShip.src = "assets/ship_enemy.png";

let enemySpaceShipBullet = new Image();
enemySpaceShipBullet.src = "assets/enemyLaser.png"

let fuelImage = new Image();
fuelImage.src = "assets/fuelpump.png";


let destroyedSound = new Audio();
destroyedSound.src = "sounds/destroyed.mp3";

let backgroundSound = new Audio();
backgroundSound.src = "sounds/background.mp3";
export { playerSpaceShip, playerShipSound, asteriods, playerBullet, destroyedSound, backgroundSound, canvasBackground, enemySpaceShip, enemySpaceShipBullet, fuelImage };
