import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    constructor () {
      super('game');            // string is unique scene key name

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
        
    }
    create ()
    {
        this.add.image(400, 300, 'casino');

        this.platforms = this.physics.add.staticGroup();
        this.arcade = this.physics.add.staticGroup();
        this.arcade.create(750,50,'arcade');

        this.platforms.create(400, 632, 'ground').setScale(2).refreshBody();

        this.platforms.create(832, 225, 'vwall').setScale(2).refreshBody();
        this.platforms.create(400, -32, 'ground').setScale(2).refreshBody();
        this.platforms.create(100, 450, 'blackjack');

        /*
        Attach player name to player sprite
        coordinates of sprite/name are relative to position in container
        container coordinates are where the container object is placed in the scene
        container size defaults to 64x64 if not set, must enable physics to be able to move
        */
        this.player_sprite = this.physics.add.sprite(0, 0, 'dude');
        this.player_name = this.add.text(-30,-50, "Player", {color: '#FFFFFF'});
        this.player = this.add.container(750,300, [this.player_sprite, this.player_name]);
        this.player.setSize(70,70);

        this.physics.world.enable(this.player);

        /*
        Adds collision between player/platform objects
        Can add function argument to collider to do something on collision (scene change etc.)
        */
        this.physics.add.collider(this.player, this.platforms);
        /*
        this.physics.add.collider(this.player, this.arcade, 
            function() {
                    this.text_test.setText("WOO");
                
            }, this);

        this.text_test = this.add.text(100, 500, "Test", { color: '#00ff00' });*/

        // WASD movement keys

        this.cursors = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D}
            );

            
    
        
    }

    update ()
    {
        // Seperating x and y movement results in smoother control
        this.player.body.setVelocity(0,0);

        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-160);

        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(160);

        }

        if (this.cursors.up.isDown) 
        {
            this.player.body.setVelocityY(-160);
            
        }
        else if (this.cursors.down.isDown) 
        {
            this.player.body.setVelocityY(160);
        }
        
        /*
         Testing different scene transitions
        if(this.player.x < -50)
            this.scene.start('blackjack', );
        */
        this.input.keyboard.on('keydown_F', function (event) {
            this.scene.start('blackjack');
        }, this); 

    }
  };