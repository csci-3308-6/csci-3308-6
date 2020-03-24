import Phaser from 'phaser';

var player_card_1;
var player_card_2;
var player_card_3;
var player_card_4;
var player_card_5;
var player_total;

var dealer_card_1;
var dealer_card_2;
var dealer_card_3;
var dealer_card_4;
var dealer_card_5;
var dealer_total;

var hit_button;
var play_button;
var stay_button;
var hand_result_text;

var hand_size;
var next_card;

var all_cards = [];
var player;
var dealer;

export default class BlackJack extends Phaser.Scene{
    constructor(){ 
        super('blackjack');  
    };

    preload(){
        
    }

    create(){
        this.add.image(400,300, 'casino');
        this.add.image(400,350, 'cardtable').setScale(.8);

        player_total = this.add.text(475,375, 'Hand Total: 0');
        dealer_total = this.add.text(475,200, 'Dealer Total: 0');
        hand_result_text = this.add.text(350, 275, 'BUST!', {color: '#FF0000'}).setFontSize(40);
        hand_result_text.visible = false;
        //win_text = this.add.text(350, 275, 'WIN!', {color: '#0000FF'}).setFontSize(40);
        //win_text.visible = false;

        player_card_1 = this.add.sprite(380,400,'nocard').setScale(.75);
        player_card_2 = this.add.sprite(390,400,'nocard').setScale(.75);
        player_card_3 = this.add.sprite(400,400,'nocard').setScale(.75);
        player_card_3.visible = false;
        player_card_4 = this.add.sprite(410,400,'nocard').setScale(.75);
        player_card_4.visible = false;
        player_card_5 = this.add.sprite(420,400,'nocard').setScale(.75);
        player_card_5.visible = false;
        dealer_card_1 = this.add.sprite(380,200,'nocard').setScale(.75);
        dealer_card_2 = this.add.sprite(390,200,'nocard').setScale(.75);
        dealer_card_3 = this.add.sprite(400,200,'nocard').setScale(.75);
        dealer_card_3.visible = false;
        dealer_card_4 = this.add.sprite(410,200,'nocard').setScale(.75);
        dealer_card_4.visible = false;
        dealer_card_5 = this.add.sprite(420,200,'nocard').setScale(.75);
        dealer_card_5.visible = false;
        
        play_button = this.add.text(150,275, 'Play').setInteractive()
                        .on('pointerdown', () => this.playFunction())
                        .on('pointerover', () => this.enterButtonHoverState(play_button))
                        .on('pointerout', () => this.enterButtonRestState(play_button));
        
        hit_button = this.add.text(350, 275, 'Hit').setInteractive()
                        .on('pointerdown', () => this.hitFunction())
                        .on('pointerover', () => this.enterButtonHoverState(hit_button))
                        .on('pointerout', () => this.enterButtonRestState(hit_button));
        
        stay_button = this.add.text(350, 295, 'Stay').setInteractive()
                        .on('pointerdown', () => this.stayFunction())
                        .on('pointerover', () => this.enterButtonHoverState(stay_button))
                        .on('pointerout', () => this.enterButtonRestState(stay_button));
        
    }

    enterButtonHoverState(button){
        button.setStyle({ fill: '#FF0000'});
    }
    
    enterButtonRestState(button){
        button.setStyle({ fill: '#FFFFFF' });
    }

    stayFunction(){
        dealerTurn();
    } 
    
    hitFunction(){
        playerTurn();
    }

    playFunction(){
        play_button.visible = false;
        play_button.disableInteractive();
        startGame();
    }

    update ()
    {
        this.input.keyboard.once('keydown_F', function (event) {

            this.scene.start('game');

        }, this); 
    }
};

function startGame(){
    initializeCards();

    hand_result_text.visible = false;
    hit_button.setInteractive();
    hit_button.visible = true;
    stay_button.setInteractive();
    stay_button.visible = true;

    player_card_3.visible = false;
    player_card_4.visible = false;
    player_card_5.visible = false;
    dealer_card_3.visible = false;
    dealer_card_4.visible = false;
    dealer_card_5.visible = false;

    player = new Player('Player', 100); // implement currency update here
    dealer = new Player('Dealer', 0);

    dealer.hand.push(all_cards.pop());
    dealer.hand.push(all_cards.pop());
    player.hand.push(all_cards.pop());
    player.hand.push(all_cards.pop());

    dealer_card_1.setTexture('cardback');
    dealer_card_2.setTexture(dealer.hand[1].imgname);
    dealer_total.setText(`Dealer Total: ${dealer.hand[1].number}`)

    player_card_1.setTexture(player.hand[0].imgname);
    player_card_2.setTexture(player.hand[1].imgname);
    player_total.setText(`Player Total: ${getCardSum(player)}`);

    next_card = player_card_3;
    hand_size = 2;
};

function disableGameOptions(){
    play_button.visible = true;
    play_button.setInteractive();
    stay_button.disableInteractive();
    stay_button.visible = false;
    hit_button.disableInteractive();
    hit_button.visible = false;
};

function displayResult(result, color){
    hand_result_text.setText(result);
    hand_result_text.setColor(color);
    hand_result_text.visible = true;
};

function bust(){
    /*
    implement player currency update
    */
    disableGameOptions();
    displayResult('BUST!', '#FF0000');
};


function playerWins(){
    /*
    implement player currency update
    */
    disableGameOptions();
    displayResult('Player Wins!', '#0000FF');
}

function dealerWins(){
    /*
    implement player currency update
    */
    disableGameOptions();
    displayResult('Dealer Wins!', '#FF0000');
};

function noWinner(){
    /*
    implement player currency update
    */
    disableGameOptions();
    displayResult('PUSH', '#FFFFFF');
}

function playerTurn(){
    let draw_card = all_cards.pop();
    player.hand.push(draw_card);
    next_card.setTexture(draw_card.imgname);
    let total = getCardSum(player);
    player_total.setText(`Player Total: ${total}`);
 
    ++hand_size;
    if(hand_size == 3){
        next_card = player_card_4;
        player_card_3.visible = true;
    }
    else if(hand_size == 4){
        next_card = player_card_5;
        player_card_4.visible = true;
    }
    else { // hits beyond 5 cards overwrite 5th card image
        player_card_5.visible = true;
    }
    if(total > 21){
        bust();
    }
    
}

function dealerTurn(){
    //Bug with displaying 5th card
    hand_size = 2;
    next_card = dealer_card_3;
    dealer_card_1.setTexture(dealer.hand[0].imgname);
    var dt = getCardSum(dealer); 
    dealer_total.setText(`Dealer Total: ${dt}`);

    while(dt <= 16){
        let draw_card = all_cards.pop();
        dealer.hand.push(draw_card);
        dt = getCardSum(dealer); 
        dealer_total.setText(`Dealer Total: ${dt}`);
        next_card.setTexture(draw_card.imgname);
        ++hand_size;
        if(hand_size == 3){
            next_card = dealer_card_4;
            dealer_card_3.visible = true;
        }
        else if(hand_size == 4){
            next_card = player_card_5;
            dealer_card_4.visible = true;
        }
        else { // hits beyond 5 cards overwrite 5th card image
            dealer_card_5.visible = true;
        }
    }
    var player_total = getCardSum(player);
    if(dt > 21 || player_total > dt){
        playerWins();
    } else if(dt > player_total){
        dealerWins();
    } else{
        noWinner();
    }
    

};

class Card {
    constructor(v, suit, id, imgname) {
        this.title = v;
        this.suit = suit;
        this.id = id;
        this.inDeck = false;
        this.imgname = imgname; 
        if (v == "ACE") {
            this.number = 11;
        }
        if (v == "TWO") {
            this.number = 2;
        }
        if (v == "THREE") {
            this.number = 3;
        }
        if (v == "FOUR") {
            this.number = 4;
        }
        if (v == "FIVE") {
            this.number = 5;
        }
        if (v == "SIX") {
            this.number = 6;
        }
        if (v == "SEVEN") {
            this.number = 7;
        }
        if (v == "EIGHT") {
            this.number = 8;
        }
        if (v == "NINE") {
            this.number = 9;
        }
        if (v == "TEN") {
            this.number = 10;
        }
        if (v == "JACK") {
            this.number = 10;
        }
        if (v == "QUEEN") {
            this.number = 10;
        }
        if (v == "KING") {
            this.number = 10;
        }
    }
}
;

class Player {
    constructor(n, c) {
        this.name = n;
        this.chips = c;
        this.bet = 0;
        this.hand = [];
    }
};

function getCardSum(player) {
    var h = player.hand;
    var count = 0;
    var hasAce = false;
    for(var i = 0; i < h.length; i++) //check for an ace
    {
      if(h[i].title == "ACE")
      {
        hasAce = true;
      }
    }

    if(hasAce == false)
    {

      for(var x = 0; x < h.length; x++)
      {
        count += h[x].number;
      }
    }
    else
    {
      //has an ace
      for(var y = 0; y < h.length; y++)
      {
        if(h[y].title != "ACE")
        {
          count += h[y].number;
        }
      }
      for(var z = 0; z < h.length; z++)
      {
        if(h[z].title == "ACE")
        {
          if(count + 11 <= 21)
          {
            count+=11;
          }
          else
          {
            count += 1;
          }
        }
      }

    }
    return count;
}


//function initializeCards() //initialize 2 deck shute in order
function initializeCards(){
    all_cards = [];
    all_cards.push(new Card("ACE","Diamond",0,"ADiamond"));
    all_cards.push(new Card("ACE","Club",1,"AClub"));
    all_cards.push(new Card("ACE","Heart",2,"AHeart"));
    all_cards.push(new Card("ACE","Spade",3,"ASpade"));
    all_cards.push(new Card("ACE","Diamond",4,"ADiamond"));
    all_cards.push(new Card("ACE","Club",5,"AClub"));
    all_cards.push(new Card("ACE","Heart",6,"AHeart"));
    all_cards.push(new Card("ACE","Spade",7,"ASpade"));
    all_cards.push(new Card("TWO","Diamond",8,"2Diamond"));
    all_cards.push(new Card("TWO","Club",9,"2Club"));
    all_cards.push(new Card("TWO","Heart",10,"2Heart"));
    all_cards.push(new Card("TWO","Spade",11,"2Spade"));
    all_cards.push(new Card("TWO","Diamond",12,"2Diamond"));
    all_cards.push(new Card("TWO","Club",13,"2Club"));
    all_cards.push(new Card("TWO","Heart",14,"2Heart"));
    all_cards.push(new Card("TWO","Spade",15,"2Spade"));
    all_cards.push(new Card("THREE","Diamond",16,"3Diamond"));
    all_cards.push(new Card("THREE","Club",17,"3Club"));
    all_cards.push(new Card("THREE","Heart",18,"3Heart"));
    all_cards.push(new Card("THREE","Spade",19,"3Spade"));
    all_cards.push(new Card("THREE","Diamond",20,"3Diamond"));
    all_cards.push(new Card("THREE","Club",21,"3Club"));
    all_cards.push(new Card("THREE","Heart",22,"3Heart"));
    all_cards.push(new Card("THREE","Spade",23,"3Spade"));
    all_cards.push(new Card("FOUR","Diamond",24,"4Diamond"));
    all_cards.push(new Card("FOUR","Club",25,"4Club"));
    all_cards.push(new Card("FOUR","Heart",26,"4Heart"));
    all_cards.push(new Card("FOUR","Spade",27,"4Spade"));
    all_cards.push(new Card("FOUR","Diamond",28,"4Diamond"));
    all_cards.push(new Card("FOUR","Club",29,"4Club"));
    all_cards.push(new Card("FOUR","Heart",30,"4Heart"));
    all_cards.push(new Card("FOUR","Spade",31,"4Spade"));
    all_cards.push(new Card("FIVE","Diamond",32,"5Diamond"));
    all_cards.push(new Card("FIVE","Club",33,"5Club"));
    all_cards.push(new Card("FIVE","Heart",34,"5Heart"));
    all_cards.push(new Card("FIVE","Spade",35,"5Spade"));
    all_cards.push(new Card("FIVE","Diamond",36,"5Diamond"));
    all_cards.push(new Card("FIVE","Club",37,"5Club"));
    all_cards.push(new Card("FIVE","Heart",38,"5Heart"));
    all_cards.push(new Card("FIVE","Spade",39,"5Spade"));
    all_cards.push(new Card("SIX","Diamond",40,"6Diamond"));
    all_cards.push(new Card("SIX","Club",41,"6Club"));
    all_cards.push(new Card("SIX","Heart",42,"6Heart"));
    all_cards.push(new Card("SIX","Spade",43,"6Spade"));
    all_cards.push(new Card("SIX","Diamond",44,"6Diamond"));
    all_cards.push(new Card("SIX","Club",45,"6Club"));
    all_cards.push(new Card("SIX","Heart",46,"6Heart"));
    all_cards.push(new Card("SIX","Spade",47,"6Spade"));
    all_cards.push(new Card("SEVEN","Diamond",48,"7Diamond"));
    all_cards.push(new Card("SEVEN","Club",49,"7Club"));
    all_cards.push(new Card("SEVEN","Heart",50,"7Heart"));
    all_cards.push(new Card("SEVEN","Spade",51,"7Spade"));
    all_cards.push(new Card("SEVEN","Diamond",52,"7Diamond"));
    all_cards.push(new Card("SEVEN","Club",53,"7Club"));
    all_cards.push(new Card("SEVEN","Heart",54,"7Heart"));
    all_cards.push(new Card("SEVEN","Spade",55,"7Spade"));
    all_cards.push(new Card("EIGHT","Diamond",56,"8Diamond"));
    all_cards.push(new Card("EIGHT","Club",57,"8Club"));
    all_cards.push(new Card("EIGHT","Heart",58,"8Heart"));
    all_cards.push(new Card("EIGHT","Spade",59,"8Spade"));
    all_cards.push(new Card("EIGHT","Diamond",60,"8Diamond"));
    all_cards.push(new Card("EIGHT","Club",61,"8Club"));
    all_cards.push(new Card("EIGHT","Heart",62,"8Heart"));
    all_cards.push(new Card("EIGHT","Spade",63,"8Spade"));
    all_cards.push(new Card("NINE","Diamond",64,"9Diamond"));
    all_cards.push(new Card("NINE","Club",65,"9Club"));
    all_cards.push(new Card("NINE","Heart",66,"9Heart"));
    all_cards.push(new Card("NINE","Spade",67,"9Spade"));
    all_cards.push(new Card("NINE","Diamond",68,"9Diamond"));
    all_cards.push(new Card("NINE","Club",69,"9Club"));
    all_cards.push(new Card("NINE","Heart",70,"9Heart"));
    all_cards.push(new Card("NINE","Spade",71,"9Spade"));
    all_cards.push(new Card("TEN","Diamond",72,"TDiamond"));
    all_cards.push(new Card("TEN","Club",73,"TClub"));
    all_cards.push(new Card("TEN","Heart",74,"THeart"));
    all_cards.push(new Card("TEN","Spade",75,"TSpade"));
    all_cards.push(new Card("TEN","Diamond",76,"TDiamond"));
    all_cards.push(new Card("TEN","Club",77,"TClub"));
    all_cards.push(new Card("TEN","Heart",78,"THeart"));
    all_cards.push(new Card("TEN","Spade",79,"TSpade"));
    all_cards.push(new Card("JACK","Diamond",80,"JDiamond"));
    all_cards.push(new Card("JACK","Club",81,"JClub"));
    all_cards.push(new Card("JACK","Heart",82,"JHeart"));
    all_cards.push(new Card("JACK","Spade",83,"JSpade"));
    all_cards.push(new Card("JACK","Diamond",84,"JDiamond"));
    all_cards.push(new Card("JACK","Club",85,"JClub"));
    all_cards.push(new Card("JACK","Heart",86,"JHeart"));
    all_cards.push(new Card("JACK","Spade",87,"JSpade"));
    all_cards.push(new Card("QUEEN","Diamond",88,"QDiamond"));
    all_cards.push(new Card("QUEEN","Club",89,"QClub"));
    all_cards.push(new Card("QUEEN","Heart",90,"QHeart"));
    all_cards.push(new Card("QUEEN","Spade",91,"QSpade"));
    all_cards.push(new Card("QUEEN","Diamond",92,"QDiamond"));
    all_cards.push(new Card("QUEEN","Club",93,"QClub"));
    all_cards.push(new Card("QUEEN","Heart",94,"QHeart"));
    all_cards.push(new Card("QUEEN","Spade",95,"QSpade"));
    all_cards.push(new Card("KING","Diamond",96,"KDiamond"));
    all_cards.push(new Card("KING","Club",97,"KClub"));
    all_cards.push(new Card("KING","Heart",98,"KHeart"));
    all_cards.push(new Card("KING","Spade",99,"KSpade"));
    all_cards.push(new Card("KING","Diamond",100,"KDiamond"));
    all_cards.push(new Card("KING","Club",101,"KClub"));
    all_cards.push(new Card("KING","Heart",102,"KHeart"));
    all_cards.push(new Card("KING","Spade",103,"KSpade"));

    //shuffle deck
    for (let i = all_cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all_cards[i], all_cards[j]] = [all_cards[j], all_cards[i]];
    }
};
