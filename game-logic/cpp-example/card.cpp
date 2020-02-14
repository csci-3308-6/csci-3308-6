#include <iostream>
#include "Card.hpp"
using namespace std;

Card::Card()
{
  value = "";
  suit = "";
  id = 0;
  inDeck = false;
  number = 0;
}

Card::Card(string v, string s, int i)
{
  value = v;
  suit = s;
  id = i;
  inDeck = false;

  //set number
  if(v == "ACE")
  {
    number = 11;
  }
  if(v == "TWO")
  {
    number = 2;
  }
  if(v == "THREE")
  {
    number = 3;
  }
  if(v == "FOUR")
  {
    number = 4;
  }
  if(v == "FIVE")
  {
    number = 5;
  }
  if(v == "SIX")
  {
    number = 6;
  }
  if(v == "SEVEN")
  {
    number = 7;
  }
  if(v == "EIGHT")
  {
    number = 8;
  }
  if(v == "NINE")
  {
    number = 9;
  }
  if(v == "TEN")
  {
    number = 10;
  }
  if(v == "JACK")
  {
    number = 10;
  }
  if(v == "QUEEN")
  {
    number = 10;
  }
  if(v == "KING")
  {
    number = 10;
  }

}

string Card::getValue()
{
  return value;
}

string Card::getSuit()
{
  return suit;
}

int Card::getId()
{
  return id;
}

bool Card::isInDeck()
{
  return inDeck;
}

void Card::setInDeck(bool b)
{
  inDeck = b;
}

int Card::getNumber()
{
  return number;
}
