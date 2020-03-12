import Phaser from 'phaser';
import sky from '../assets/sky.png';
import dude from "../assets/sq.png";


export default class BlackJack extends Phaser.Scene {
    constructor() { 
        super('blackjack') 
        this.player = null;
        this.cursors = null;
    };

    preload(){
        this.load.image('sky', sky);
        this.load.spritesheet('dude', 
            dude,
            { frameWidth: 75, frameHeight: 75 }
        );
    }

    create(){
        this.add.image(400, 300, 'sky');
        this.player = this.physics.add.sprite(759, 300, 'dude').setScrollFactor(0);
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
            this.scene.start('game');

        
    }
}
