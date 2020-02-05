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
    chips = 0;
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
    //cout<<name<<" doesnt have an ace."<<endl;
    for(int x = 0; x < cardsInHand; x++)
    {
      count += hand[x].getNumber();
    }
  }
  else
  {
    //cout<<name<<" has an ace."<<endl;
    for(int y = 0; y < cardsInHand; y++)
    {
      if(hand[y].getValue() != "ACE")
      {
        //cout<<"value of non ace cards: "<<hand[y].getNumber()<<endl;
        count += hand[y].getNumber();
        //cout<<"count before aces = "<<count<<endl;
      }
    }
    for(int z = 0; z < cardsInHand; z++)
    {
      if(hand[z].getValue() == "ACE")
      {
        if(count + 11 <=21)
        {
          //cout<<"count ace as 11"<<endl;
          count+=11;
        }
        else
        {
          //cout<<"pushed over, change ace to a 1"<<endl;
          count += 1;
        }
      }
      //cout<<"count after aces = "<<count<<endl;
    }
    // cout<<name<<" has an ace."<<endl;
    // for(int y = 0; y < cardsInHand; y++)
    // {
    //   if(hand[y].getValue() != "ACE")
    //   {
    //     cout<<"value of non ace cards: "<<hand[y].getNumber()<<endl;
    //     count += hand[y].getNumber();
    //     cout<<"count = "<<count<<endl;
    //   }
    //   else if(count + 11 <= 21) //if card is an ace
    //   {
    //     cout<<"count ace as 11"<<endl;
    //     count += 11;
    //   }
    //   else //if 11 would push user over 21
    //   {
    //     cout<<"pushed over, change ace to a 1"<<endl;
    //     count += 1;
    //   }
    // }

  }
  return count;

}

void Player::placeBet(int n)
{
  if(n >= chips && n != 0)
  {
    cout<<name<<" is all in!"<<endl;
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
