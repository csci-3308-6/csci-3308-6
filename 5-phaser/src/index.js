import Phaser from "phaser";
import GameScene from "./scenes/gamescene";
import config from "./config/config";
import BlackJack from "./scenes/blackjack";
import testScene from "./scenes/test";
import PreloadScene from "./scenes/preload";


class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('preload', PreloadScene);
    this.scene.add('game', GameScene);
    this.scene.add('blackjack', BlackJack);
    this.scene.add('test', testScene);
    this.scene.start('preload');
  }
}

var game = new Game();