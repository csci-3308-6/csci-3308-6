import Phaser from "phaser";
import casinoBackground from "../assets/casino-background.png";
import table from "../assets/table.png";
import verticalWall from "../assets/vertical-wall.png";
import dude from "../assets/square.png";
import arcade from "../assets/arcade.png"

export default class GameScene extends Phaser.Scene {
    
    constructor () {
        super('game');
        this.player_sprite = null;
        this.player_name = null;
        this.player = null;
        this.platforms = null;
        this.arcade = null;
        this.cursors = null;
        this.text_test = null;
        this.action_key = null;
    }
    
    preload () {
        this.load.image('arcade', arcade);
        this.load.image('casino', casinoBackground);
        this.load.image('blackjack', table);
        this.load.image('vwall', verticalWall);
        this.load.image('dude', dude);
    }

    create () {
        this.add.image(400, 300, 'casino');
        this.platforms = this.physics.add.staticGroup();
        this.arcade = this.physics.add.staticGroup();
        this.arcade.create(750,50,'arcade');
        this.platforms.create(400, 632, 'ground').setScale(2).refreshBody();
        this.platforms.create(832, 225, 'vwall').setScale(2).refreshBody();
        this.platforms.create(400, -32, 'ground').setScale(2).refreshBody();
        this.platforms.create(100, 450, 'blackjack');
        this.player_sprite = this.physics.add.sprite(0, 0, 'dude');
        this.player_name = this.add.text(-30,-50, "Player", {color: '#FFFFFF'});
        this.player = this.add.container(750,300, [this.player_sprite, this.player_name]);
        this.player.setSize(70,70);
        this.physics.world.enable(this.player);
        this.physics.add.collider(this.player, this.platforms);
        this.cursors = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D}
        );
    }

    update () {
        this.player.body.setVelocity(0,0);
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-160);

        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(160);

        }
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-160);
            
        }
        else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(160);
        }
    }
};