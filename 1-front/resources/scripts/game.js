var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var character;

function preload () {
    this.load.image("casino", "../resources/images/casino.png");
    this.load.image("character", "../resources/images/character-blue.png")
}

function create () {
    this.add.image(400, 300, "casino");
    character = this.add.sprite(400, 300, "character");
}

function update () {
    character.x += 1;
    character.y += 1;
}
