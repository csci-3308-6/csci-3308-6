import Phaser from "phaser";
import GameScene from "./scenes/gamescene";
import config from "./config/config";
import BlackJack from "./scenes/blackjack";

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('game', GameScene);
    this.scene.add('blackjack', BlackJack);
    this.scene.start('game');
  }
}

var game = new Game();