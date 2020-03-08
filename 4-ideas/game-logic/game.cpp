#include <iostream>
#include "Game.hpp"
#include "Card.hpp"
using namespace std;

Game::Game()
{
  //Player dealer("dealer",0); //create dealer player
  addDealer(); //add dealer to players vector
  initializeDeck(); //add cards
  shuffle(); //create new deck
}

void Game::initializeDeck()
{
  allCards[0] = Card("ACE","Diamond",0);
  allCards[1] = Card("ACE","Club",1);
  allCards[2] = Card("ACE","Heart",2);
  allCards[3] = Card("ACE","Spade",3);
  allCards[4] = Card("ACE","Diamond",4);
  allCards[5] = Card("ACE","Club",5);
  allCards[6] = Card("ACE","Heart",6);
  allCards[7] = Card("ACE","Spade",7);
  allCards[8] = Card("TWO","Diamond",8);
  allCards[9] = Card("TWO","Club",9);
  allCards[10] = Card("TWO","Heart",10);
  allCards[11] = Card("TWO","Spade",11);
  allCards[12] = Card("TWO","Diamond",12);
  allCards[13] = Card("TWO","Club",13);
  allCards[14] = Card("TWO","Heart",14);
  allCards[15] = Card("TWO","Spade",15);
  allCards[16] = Card("THREE","Diamond",16);
  allCards[17] = Card("THREE","Club",17);
  allCards[18] = Card("THREE","Heart",18);
  allCards[19] = Card("THREE","Spade",19);
  allCards[20] = Card("THREE","Diamond",20);
  allCards[21] = Card("THREE","Club",21);
  allCards[22] = Card("THREE","Heart",22);
  allCards[23] = Card("THREE","Spade",23);
  allCards[24] = Card("FOUR","Diamond",24);
  allCards[25] = Card("FOUR","Club",25);
  allCards[26] = Card("FOUR","Heart",26);
  allCards[27] = Card("FOUR","Spade",27);
  allCards[28] = Card("FOUR","Diamond",28);
  allCards[29] = Card("FOUR","Club",29);
  allCards[30] = Card("FOUR","Heart",30);
  allCards[31] = Card("FOUR","Spade",31);
  allCards[32] = Card("FIVE","Diamond",32);
  allCards[33] = Card("FIVE","Club",33);
  allCards[34] = Card("FIVE","Heart",34);
  allCards[35] = Card("FIVE","Spade",35);
  allCards[36] = Card("FIVE","Diamond",36);
  allCards[37] = Card("FIVE","Club",37);
  allCards[38] = Card("FIVE","Heart",38);
  allCards[39] = Card("FIVE","Spade",39);
  allCards[40] = Card("SIX","Diamond",40);
  allCards[41] = Card("SIX","Club",41);
  allCards[42] = Card("SIX","Heart",42);
  allCards[43] = Card("SIX","Spade",43);
  allCards[44] = Card("SIX","Diamond",44);
  allCards[45] = Card("SIX","Club",45);
  allCards[46] = Card("SIX","Heart",46);
  allCards[47] = Card("SIX","Spade",47);
  allCards[48] = Card("SEVEN","Diamond",48);
  allCards[49] = Card("SEVEN","Club",49);
  allCards[50] = Card("SEVEN","Heart",50);
  allCards[51] = Card("SEVEN","Spade",51);
  allCards[52] = Card("SEVEN","Diamond",52);
  allCards[53] = Card("SEVEN","Club",53);
  allCards[54] = Card("SEVEN","Heart",54);
  allCards[55] = Card("SEVEN","Spade",55);
  allCards[56] = Card("EIGHT","Diamond",56);
  allCards[57] = Card("EIGHT","Club",57);
  allCards[58] = Card("EIGHT","Heart",58);
  allCards[59] = Card("EIGHT","Spade",59);
  allCards[60] = Card("EIGHT","Diamond",60);
  allCards[61] = Card("EIGHT","Club",61);
  allCards[62] = Card("EIGHT","Heart",62);
  allCards[63] = Card("EIGHT","Spade",63);
  allCards[64] = Card("NINE","Diamond",64);
  allCards[65] = Card("NINE","Club",65);
  allCards[66] = Card("NINE","Heart",66);
  allCards[67] = Card("NINE","Spade",67);
  allCards[68] = Card("NINE","Diamond",68);
  allCards[69] = Card("NINE","Club",69);
  allCards[70] = Card("NINE","Heart",70);
  allCards[71] = Card("NINE","Spade",71);
  allCards[72] = Card("TEN","Diamond",72);
  allCards[73] = Card("TEN","Club",73);
  allCards[74] = Card("TEN","Heart",74);
  allCards[75] = Card("TEN","Spade",75);
  allCards[76] = Card("TEN","Diamond",76);
  allCards[77] = Card("TEN","Club",77);
  allCards[78] = Card("TEN","Heart",78);
  allCards[79] = Card("TEN","Spade",79);
  allCards[80] = Card("JACK","Diamond",80);
  allCards[81] = Card("JACK","Club",81);
  allCards[82] = Card("JACK","Heart",82);
  allCards[83] = Card("JACK","Spade",83);
  allCards[84] = Card("JACK","Diamond",84);
  allCards[85] = Card("JACK","Club",85);
  allCards[86] = Card("JACK","Heart",86);
  allCards[87] = Card("JACK","Spade",87);
  allCards[88] = Card("QUEEN","Diamond",88);
  allCards[89] = Card("QUEEN","Club",89);
  allCards[90] = Card("QUEEN","Heart",90);
  allCards[91] = Card("QUEEN","Spade",91);
  allCards[92] = Card("QUEEN","Diamond",92);
  allCards[93] = Card("QUEEN","Club",93);
  allCards[94] = Card("QUEEN","Heart",94);
  allCards[95] = Card("QUEEN","Spade",95);
  allCards[96] = Card("KING","Diamond",96);
  allCards[97] = Card("KING","Club",97);
  allCards[98] = Card("KING","Heart",98);
  allCards[99] = Card("KING","Spade",99);
  allCards[100] = Card("KING","Diamond",100);
  allCards[101] = Card("KING","Club",101);
  allCards[102] = Card("KING","Heart",102);
  allCards[103] = Card("KING","Spade",103);

}

vector<Player> Game::getPlayers()
{
  return players;
}

void Game::addPlayer()
{
  cout<<"Enter new player name: ";
  string myname;
  cin>>myname;
  cout<<"Enter buy in: ";
  int buyin;
  cin>>buyin;

  Player newPlayer(myname, buyin);
  //players.push_back(newPlayer); //add player to players list
  players.insert(players.begin(),newPlayer);
}

void Game::removePlayer(Player p)
{
  int loc = -1;
  for(int i = 0; i < players.size(); i++)
  {
    if(players[i].getName() == p.getName())
    {
      loc = i; //location to erase
    }
  }
  players.erase(players.begin()+loc); //remove player from game
}

void Game::reBuyin(Player p)
{

}

void Game::addDealer()
{
  Player dealer("dealer",0);
  players.push_back(dealer);
}

void Game::turn(Player &p)
{
  int choice;
  cout<<"("<<p.getName()<<"'s turn)"<<endl;

  if(p.getName() != "dealer")
  {
    int currTotal = p.getCardSum();
    cout<<p.getName()<<" has: "<<currTotal<<endl;

    while(p.getCardSum() <= 21 && choice != 2 && choice != 3)
    {
      vector<Card> myHand = p.getHand();
      int cih = p.getCardsInHand();

      if(cih == 2) //double down possible
      {
        cout<<"Would "<<p.getName()<<" like to hit(1), stand(2), or double down(3)?"<<endl;
        //int choice;
        cin>>choice;

        switch(choice)
        {
          case(1):
            hit(p);
            cih++; //increment num cards in hand
            break;
          case(2):
            stand(p);
            break;
          case(3):
            doubleDown(p);
            break;


        }
      }
      else  //double down not possible
      {
        displayCards(false);
        cout<<"Would "<<p.getName()<<" like to hit(1), or stand(2)?"<<endl;
        //int choice2;
        cin>>choice;

        switch(choice)
        {
          case(1):
            hit(p);
            cih++;
            break;
          case(2):
            stand(p);
            break;


        }
      }
      // displayCards(false);
    }

  }
  else //dealer's turn
  {
    vector<Card> dealerHand = p.getHand();
    cout<<"The dealer flipped over "<<dealerHand[1].getValue()<<" of "<<dealerHand[1].getSuit()<<endl;
    cout<<"Dealer has "<<p.getCardSum()<<endl;
    displayCards(true); //show flipped card
    cout<<endl;
    while(p.getCardSum() <= 16)
    {
      hit(p);
      displayCards(true);
    }
    stand(p);

  }

}

void Game::shuffle()
{
  while(deck.size() != 0)
  {
    deck.pop(); //clear deck
  }
  for(int x = 0; x < 104; x++)
  {
    allCards[x].setInDeck(false); // clear deck
  }

  for(int i = 0; i < 104; i++) //add 2 decks / 104 cards
  {
    int n = rand() % 104; //randomize number between 0 and 103
    while(allCards[n].isInDeck() == true) //rendomize new number until new card can be added to deck
    {
      n = rand() % 104;
    }
    //when new card can be added
    allCards[n].setInDeck(true);
    deck.push(allCards[n]);
  }
  cout<<"Deck has been shuffled."<<endl;
}

void Game::dealCards()
{
  //deal 2 cards to each player
  for(int i = 0; i < players.size(); i++)
  {
    //hit(players[i]);
    Card dealtCard = deck.top();
    deck.pop(); //pop of deck
    dealtCard.setInDeck(false);
    players[i].addCard(dealtCard); //add card to players hand
    cout<<players[i].getName()<<" got a "<<dealtCard.getValue()<<" of "<<dealtCard.getSuit()<<endl;
  }
  for(int j = 0; j < players.size(); j++)
  {
    //hit(players[j]);
    Card dealtCard2 = deck.top();
    deck.pop(); //pop of deck
    dealtCard2.setInDeck(false);
    players[j].addCard(dealtCard2); //add card to players hand

    if(players[j].getName() != "dealer")
    {
      cout<<players[j].getName()<<" got a "<<dealtCard2.getValue()<<" of "<<dealtCard2.getSuit()<<endl;
    }
  }
}

void Game::hit(Player &p)
{
  cout<<"hit"<<endl;
  Card dealtCard = deck.top();
  deck.pop(); //pop of deck
  dealtCard.setInDeck(false);
  p.addCard(dealtCard); //add card to players hand
  if(p.getName() == "dealer" && p.getHand().size() == 1) //dont reveal dealers 2nd card
  {

  }
  else
  {
    cout<<p.getName()<<" got a "<<dealtCard.getValue()<<" of "<<dealtCard.getSuit()<<endl;
    cout<<p.getName()<<" now has "<<p.getCardSum()<<endl; // + dealtCard.getNumber()
  }

  // dealtCard.setInDeck(false);
  // p.addCard(dealtCard); //add card to players hand
}

void Game::stand(Player p)
{
  cout<<p.getName()<<" stands at "<<p.getCardSum() <<endl;
}

void Game::doubleDown(Player &p)
{
  cout<<"double down"<<endl;
  int currBet = p.getBet();
  p.placeBet(2*currBet); //double bet
  hit(p);
}

void Game::displayCards(bool showDealer)
{
  vector<Card> dealerCards = players[players.size()-1].getHand();
  Card dealer1 = dealerCards[0];
  Card dealer2 = dealerCards[1];
  string dv1 = dealer1.getValue();
  string dv2 = dealer2.getValue();
  string ds1 = dealer1.getSuit();
  string ds2 = dealer2.getSuit();

  // vector<Card> playerCards = players[0].getHand();
  // Card player1 = playerCards[0];
  // Card player2 = playerCards[1];
  // string pv1 = player1.getValue();
  // string pv2 = player2.getValue();
  // string ps1 = player1.getSuit();
  // string ps2 = player2.getSuit();
  // for(int i = 0; i < playerCards.size(); i++)
  // {
  //   cout<<playerCards[i].getValue()<<"("<<playerCards[i].getSuit()<<endl;
  // }

  cout<<"__________________________________"<<endl;
  cout<<dv1<<"(" << ds1 <<")"<<endl;
  if(showDealer)
  {
    //cout<<dv2<<"(" << ds2 <<")"<<endl;
    for(int j = 1; j < dealerCards.size(); j++)
    {
      cout<<dealerCards[j].getValue()<<"("<<dealerCards[j].getSuit()<<")"<<endl;

    }
    cout<<"Dealer total: "<<players[players.size()-1].getCardSum()<<endl;
  }
  else {
    cout<<"?(?)"<<endl;
  }
  cout<<endl;
  cout<<endl;
  cout<<"-----------------------------------"<<endl;
  cout<<endl;
  cout<<endl;

  for(int i = 0; i < players.size()-1; i++)
  {
    cout<<players[i].getName()<<": ";
    vector<Card> playerCards = players[i].getHand();
    for(int j = 0; j < playerCards.size(); j++)
    {
      cout<<playerCards[j].getValue()<<"("<<playerCards[j].getSuit()<<") , ";

    }
    cout<<players[i].getName()<<" total: "<<players[i].getCardSum()<<endl;
    // cout<<playerCards[i].getValue()<<"("<<playerCards[i].getSuit()<<")   |   ";
  }
  cout<<endl;
    // for(int j = 0; j < playerCards.size(); j++)
    // {
    //   cout<<playerCards[i].getValue()<<"("<<playerCards[i].getSuit()<<")"<<endl;
    // }
  //}

  //cout<<endl;
  // cout<<players[0].getName()<<" total: "<<players[0].getCardSum()<<endl;
  cout<<"__________________________________"<<endl;



}

void Game::runRound()
{
  int n;
  //check if reshuffle is need
  cout<<deck.size()<<" cards left"<<endl;
  if(deck.size() <= 6*players.size())
  {
    shuffle();
  }
  //players bet
  for(int x = 0; x < players.size() - 1; x++)
  {
    cout<<players[x].getName()<<" has "<<players[x].getChips()<<" chips"<<endl;
    cout<<"bet (-1) to leave game."<<endl;
    cout<<players[x].getName()<<" bets: $";
    cin>>n;
    if(n == -1)
    {
      cout<<players[x].getName()<<" has left the game."<<endl;
      removePlayer(players[x]);
      //break;
    }
    else{
      players[x].placeBet(n); //place a bet
    }
  }
  //deal cards
  dealCards();
  //display cards (first card for dealer)
  // displayCards(false);

  for(int i = 0; i < players.size(); i++) //loop through all players, dealer last
  {
    displayCards(false);
    turn(players[i]);

  }
  //payout stage (check for removal/buyin)
  for(int j = 0; j < players.size() - 1; j++)
  {
    //case 1: player bust
    if(players[j].getCardSum() > 21)
    {
      cout<<players[j].getName()<<" busted, loses $"<<players[j].getBet()<<endl;
      players[j].adjustChips(-1*players[j].getBet());
    }
    else if(players[j].getCardSum() == 21 && players[j].getCardsInHand() == 2) //case 2: blackjack
    {
      cout<<players[j].getName()<<" got blackjack! Wins $"<<(1.5*players[j].getBet())<<endl;
      players[j].adjustChips((1.5*players[j].getBet()));
    }
    else if(players[players.size()-1].getCardSum() > 21 && players[j].getCardSum() <= 21) //case 3: dealer bust, not player
    {
      cout<<"Dealer busted, "<<players[j].getName()<<" wins $"<<players[j].getBet()<<endl;
      players[j].adjustChips(players[j].getBet());
    }
    else if(players[j].getCardSum() < players[players.size()-1].getCardSum()) //case 4: lose to dealer
    {
      cout<<players[j].getName()<<" loses $"<<players[j].getBet()<<endl;
      players[j].adjustChips(-1*players[j].getBet());
    }
    else if(players[j].getCardSum() > players[players.size()-1].getCardSum()) //case 5: win against dealer
    {
      cout<<players[j].getName()<<" wins $"<<players[j].getBet()<<endl;
      players[j].adjustChips(players[j].getBet());
    }
    else //case 6: push
    {
      cout<<players[j].getName()<<" pushes"<<endl;
    }


  }

  //remove everyone's cards and bets
  for(int z = 0; z < players.size(); z++)
  {
    players[z].clearHand();
    players[z].placeBet(0);
  }

  //check for buyin
  for(int y = 0; y < players.size()-1; y++)
  {
    if(players[y].getChips() == 0) //if out of money
    {
      cout<<players[y].getName()<<" is out of chips, would you like to buy back in? (y/n)";
      string ans;
      cin>>ans;
      if(ans == "y" || ans == "Y") //buy back in
      {
        cout<<"How much would you like to buy in with?";
        int amount;
        cin>>amount;
        players[y].adjustChips(amount);
      }
      else //remove from game
      {
        cout<<players[y].getName()<<" has left the game."<<endl;
        removePlayer(players[y]);
      }
    }
  }

  cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;

}

void Game::runGame()
{
  running = true;
  while(players.size() > 1) //while there is at least one player and the dealer in the game
  {
    //run a round
    runRound();
  }
  cout<<"Game has ended"<<endl;
}
