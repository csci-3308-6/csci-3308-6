import Phaser from "phaser";
import cBG from "../assets/casinoBG.jpg";
import table from "../assets/Table.png";
import vwall from "../assets/VerticalWall.png";
import dude from "../assets/sq.png";

export default class GameScene extends Phaser.Scene {
    constructor () {
      super('game');            // string is unique scene key name
      this.player = null;
      this.platforms = null;
      this.cursors = null;
    }
    
    preload ()
    {
        this.load.image('casino', cBG);
        this.load.image('blackjack', table);
        this.load.image('vwall', vwall);
        this.load.spritesheet('dude', 
            dude,
            { frameWidth: 75, frameHeight: 75 }
        );
    }

    create ()
    {
        this.add.image(400, 300, 'casino');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 632, 'ground').setScale(2).refreshBody();

        this.platforms.create(832, 225, 'vwall').setScale(2).refreshBody();
        this.platforms.create(400, -32, 'ground').setScale(2).refreshBody();
        this.platforms.create(100, 450, 'blackjack');
        this.player = this.physics.add.sprite(759, 300, 'dude').setScrollFactor(0);

     //   player.setBounce(0.2);
    //    player.setCollideWorldBounds(true);
     //   player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.platforms);
        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);

         //   player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);

         //   player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) //&& player.body.touching.down)
        {
            this.player.setVelocityY(-160);
            
        }
        else if (this.cursors.down.isDown) //&& player.body.touching.down)
        {
            this.player.setVelocityY(160);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);

         //   player.anims.play('turn');
        }

        if(this.player.x < -50)
            this.scene.start('blackjack', );

        
    }
  };