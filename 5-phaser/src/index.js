import Phaser    from "phaser";
import gamescene from "./scenes/gamescene";
import config    from "./config/config";

class Game extends Phaser.Game {
    constructor () {
        super(config);
        this.scene.add('game', gamescene);
        this.scene.start('game');
    }
}

var game = new Game();