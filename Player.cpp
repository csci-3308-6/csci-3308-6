#include <iostream>
#include <vector>
#include "Player.hpp"
using namespace std;

Player::Player(string n, int c)
{
  name = n;
  chips = c;
  bet = 0;
  cardsInHand = 0;
  //hand = new vector<int>;
}

string Player::getName()
{
  return name;
}

int Player::getChips()
{
  return chips;
}

void Player::adjustChips(int n)
{
  chips += n;
  if(chips <= 0)
  {
    cout<<name<<" is out of money."<<endl;
  }
}

int Player::getCardSum()
{
  int count = 0;
  bool hasAce = false;
  for(int i = 0; i < cardsInHand; i++) //check for an ace
  {
    if(hand[i].getValue() == "ACE")
    {
      hasAce = true;
    }
  }

  if(!hasAce)
  {
    for(int x = 0; x < cardsInHand; x++)
    {
      count += hand[x].getNumber();
    }
  }
  else
  {

    for(int y = 0; y < cardsInHand; y++)
    {
      if(hand[y].getValue() != "ACE")
      {
        count += hand[y].getNumber();
      }
      if(count + 11 <= 21)
      {
        count += 11;
      }
      else //if 11 would push user over 21
      {
        count += 1;
      }
    }

  }
  return count;

}

void Player::placeBet(int n)
{
  if(n > chips)
  {
    cout<<"all in"<<endl;
    bet = chips;
  }
  bet = n;
}

int Player::getBet()
{
  return bet;
}

int Player::getCardsInHand()
{
  //return hand.size();
  return cardsInHand;
}

void Player::clearHand()
{
  while(hand.size() > 0)
  {
    hand.pop_back();
  }
  cardsInHand = 0;
}

void Player::addCard(Card c)
{
  hand.push_back(c);
  cardsInHand++;
}

vector<Card> Player::getHand()
{
  return hand;
}
