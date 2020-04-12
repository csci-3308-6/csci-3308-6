var appData = {};

appData.startButton = document.getElementById('start');
appData.hitButton = document.getElementById('hit');
appData.stayButton = document.getElementById('stay');
appData.playerName = document.getElementById('pname');
appData.buyIn = document.getElementById('buyin');

appData.allCards = [];
appData.deck = [];
appData.players = []; //array of all player, dealer last

function Card(v, suit, id)
{
    this.title = v;
    this.suit = suit;
    this.id = id;
    this.inDeck = false;

    if(v == "ACE")
    {
      this.number = 11;
    }
    if(v == "TWO")
    {
      this.number = 2;
    }
    if(v == "THREE")
    {
      this.number = 3;
    }
    if(v == "FOUR")
    {
      this.number = 4;
    }
    if(v == "FIVE")
    {
      this.number = 5;
    }
    if(v == "SIX")
    {
      this.number = 6;
    }
    if(v == "SEVEN")
    {
      this.number = 7;
    }
    if(v == "EIGHT")
    {
      this.number = 8;
    }
    if(v == "NINE")
    {
      this.number = 9;
    }
    if(v == "TEN")
    {
      this.number = 10;
    }
    if(v == "JACK")
    {
      this.number = 10;
    }
    if(v == "QUEEN")
    {
      this.number = 10;
    }
    if(v == "KING")
    {
      this.number = 10;
    }
};

function Player(n, c)
{
    this.name = n;
    this.chips = c;
    this.bet = 0;
    this.hand = [];
};

//function initializeCards() //initialize 2 deck shute in order
var initializeCards = function()
{
    var allCards = [];
    //document.write("start init");
    //alert("start init");

    allCards.push(new Card("ACE","Diamond",0));
    allCards.push(new Card("ACE","Club",1));
    allCards.push(new Card("ACE","Heart",2));
    allCards.push(new Card("ACE","Spade",3));
    allCards.push(new Card("ACE","Diamond",4));
    allCards.push(new Card("ACE","Club",5));
    allCards.push(new Card("ACE","Heart",6));
    allCards.push(new Card("ACE","Spade",7));
    allCards.push(new Card("TWO","Diamond",8));
    allCards.push(new Card("TWO","Club",9));
    allCards.push(new Card("TWO","Heart",10));
    allCards.push(new Card("TWO","Spade",11));
    allCards.push(new Card("TWO","Diamond",12));
    allCards.push(new Card("TWO","Club",13));
    allCards.push(new Card("TWO","Heart",14));
    allCards.push(new Card("TWO","Spade",15));
    allCards.push(new Card("THREE","Diamond",16));
    allCards.push(new Card("THREE","Club",17));
    allCards.push(new Card("THREE","Heart",18));
    allCards.push(new Card("THREE","Spade",19));
    allCards.push(new Card("THREE","Diamond",20));
    allCards.push(new Card("THREE","Club",21));
    allCards.push(new Card("THREE","Heart",22));
    allCards.push(new Card("THREE","Spade",23));
    allCards.push(new Card("FOUR","Diamond",24));
    allCards.push(new Card("FOUR","Club",25));
    allCards.push(new Card("FOUR","Heart",26));
    allCards.push(new Card("FOUR","Spade",27));
    allCards.push(new Card("FOUR","Diamond",28));
    allCards.push(new Card("FOUR","Club",29));
    allCards.push(new Card("FOUR","Heart",30));
    allCards.push(new Card("FOUR","Spade",31));
    allCards.push(new Card("FIVE","Diamond",32));
    allCards.push(new Card("FIVE","Club",33));
    allCards.push(new Card("FIVE","Heart",34));
    allCards.push(new Card("FIVE","Spade",35));
    allCards.push(new Card("FIVE","Diamond",36));
    allCards.push(new Card("FIVE","Club",37));
    allCards.push(new Card("FIVE","Heart",38));
    allCards.push(new Card("FIVE","Spade",39));
    allCards.push(new Card("SIX","Diamond",40));
    allCards.push(new Card("SIX","Club",41));
    allCards.push(new Card("SIX","Heart",42));
    allCards.push(new Card("SIX","Spade",43));
    allCards.push(new Card("SIX","Diamond",44));
    allCards.push(new Card("SIX","Club",45));
    allCards.push(new Card("SIX","Heart",46));
    allCards.push(new Card("SIX","Spade",47));
    allCards.push(new Card("SEVEN","Diamond",48));
    allCards.push(new Card("SEVEN","Club",49));
    allCards.push(new Card("SEVEN","Heart",50));
    allCards.push(new Card("SEVEN","Spade",51));
    allCards.push(new Card("SEVEN","Diamond",52));
    allCards.push(new Card("SEVEN","Club",53));
    allCards.push(new Card("SEVEN","Heart",54));
    allCards.push(new Card("SEVEN","Spade",55));
    allCards.push(new Card("EIGHT","Diamond",56));
    allCards.push(new Card("EIGHT","Club",57));
    allCards.push(new Card("EIGHT","Heart",58));
    allCards.push(new Card("EIGHT","Spade",59));
    allCards.push(new Card("EIGHT","Diamond",60));
    allCards.push(new Card("EIGHT","Club",61));
    allCards.push(new Card("EIGHT","Heart",62));
    allCards.push(new Card("EIGHT","Spade",63));
    allCards.push(new Card("NINE","Diamond",64));
    allCards.push(new Card("NINE","Club",65));
    allCards.push(new Card("NINE","Heart",66));
    allCards.push(new Card("NINE","Spade",67));
    allCards.push(new Card("NINE","Diamond",68));
    allCards.push(new Card("NINE","Club",69));
    allCards.push(new Card("NINE","Heart",70));
    allCards.push(new Card("NINE","Spade",71));
    allCards.push(new Card("TEN","Diamond",72));
    allCards.push(new Card("TEN","Club",73));
    allCards.push(new Card("TEN","Heart",74));
    allCards.push(new Card("TEN","Spade",75));
    allCards.push(new Card("TEN","Diamond",76));
    allCards.push(new Card("TEN","Club",77));
    allCards.push(new Card("TEN","Heart",78));
    allCards.push(new Card("TEN","Spade",79));
    allCards.push(new Card("JACK","Diamond",80));
    allCards.push(new Card("JACK","Club",81));
    allCards.push(new Card("JACK","Heart",82));
    allCards.push(new Card("JACK","Spade",83));
    allCards.push(new Card("JACK","Diamond",84));
    allCards.push(new Card("JACK","Club",85));
    allCards.push(new Card("JACK","Heart",86));
    allCards.push(new Card("JACK","Spade",87));
    allCards.push(new Card("QUEEN","Diamond",88));
    allCards.push(new Card("QUEEN","Club",89));
    allCards.push(new Card("QUEEN","Heart",90));
    allCards.push(new Card("QUEEN","Spade",91));
    allCards.push(new Card("QUEEN","Diamond",92));
    allCards.push(new Card("QUEEN","Club",93));
    allCards.push(new Card("QUEEN","Heart",94));
    allCards.push(new Card("QUEEN","Spade",95));
    allCards.push(new Card("KING","Diamond",96));
    allCards.push(new Card("KING","Club",97));
    allCards.push(new Card("KING","Heart",98));
    allCards.push(new Card("KING","Spade",99));
    allCards.push(new Card("KING","Diamond",100));
    allCards.push(new Card("KING","Club",101));
    allCards.push(new Card("KING","Heart",102));
    allCards.push(new Card("KING","Spade",103));

    //document.write(allCards[1].title);
    return allCards;
};

var placeBetbet = function(player)
{
    var userInput = document.getElementById("userBet").value;
    player.bet = userInput;
};

function test()
{
    document.write("test");
}

function startGame()
{
    //alert("start game");
    //add player
    addPlayer();
    //add dealer
    addDealer();

    for(var i = 0; i < appData.players.length; i++)
    {
        document.write(appData.players[i].name + ", ");
    }

    appData.allCards = initializeCards();
    appData.deck = shuffle();
    dealCards();
    displayPlayerHand();
    //deckPrinter(appData.deck);
    //runGame();
}



var shuffle = function()
{
    //alert("shuffle");
    temp = [];
    //alert("temp[0].title");
    //if(temp[0])
    for(var i = 0; i < appData.allCards.length; i++)
    {
        //remove all cards from deck
        appData.allCards[i].inDeck = false;
    }

    for(var j = 0; j < 104; j++) //add 2 decks / 104 cards
    {
      var n = Math.floor(Math.random() * 104); //randomize number between 0 and 103
      while(appData.allCards[n].inDeck == true) //rendomize new number until new card can be added to deck
      {
        n = Math.floor(Math.random() * 104);
      }
      //when new card can be added
      appData.allCards[n].inDeck = true; //now in deck
      temp.push(appData.allCards[n]);
    }

    return temp;
};


var deckPrinter = function (deck) {
    //alert("suh");
    document.write(deck.length);
    for (var i = 0; i < deck.length; i++)
    {
        //console.log(deck[i].name);
        document.write(deck[i].title + " , ");
    }
    return
}

var addPlayer = function()
{
    myPlayer = new Player("Player", 100); //default settings
    appData.players.push(myPlayer);
};

var addDealer = function()
{
    dealer = new Player("Dealer",0);
    appData.players.push(dealer);
};

var dealCards = function()
{
    document.write("dealing cards");
    for(var i = 0; i < 2; i++)
    {
        for(var j = 0; j < appData.players.length; j++)
        {
            appData.players[j].hand[i] = appData.deck.pop();
            document.write((appData.players[j].hand[i]).title);
            document.write((appData.players[j].hand[i]).suit);
        }
    }
};

var showHands = function()
{
    for(var i = 0; i < 2; i++)
    {
        for(var j = 0; j < appData.players.length; j++)
        {
            document.write(appData.players[j].hand[i]);
        }
    }
};

function displayPlayerHand()
{
    alert("hi");
    //var myHand = appData.players[0].hand;

    // var x = document.createElement("IMG");
    //   x.setAttribute("src", "./uparrow.svg");
    //   x.setAttribute("width", "304");
    //   x.setAttribute("height", "228");
    //   x.setAttribute("alt", "The Pulpit Rock");
    //   document.body.appendChild(x);

    a = document.getElementById('card1');
    a.setAttribute("src", "./uparrow.svg");
}

// var runGame = function()
// {
//     appData.running = true;
//     while(appData.players.length > 1) //while there is at least one player and the dealer in the game
//     {
//       //run a round
//       runRound();
//     }
//     //cout<<"Game has ended"<<endl;
//   }
// };
//
// var runRound = function()
// {
//     //check if reshuffle is needed
//     if(appData.deck.length <= 6*players.length)
//     {
//       shuffle();
//     }
//
//     //players bet
//     for(var i = 0; i < appData.players.length-1; i++)
//     {
//         alert("bet");
//         //placeBet()
//     }
//
//     //deal cards
//
//     //each player takes turn
//
//     //payout stage
//
//     //remove cards and bets
//
//     //check for bankrupcy
// };
