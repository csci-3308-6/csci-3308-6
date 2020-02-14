#ifndef CARD_H
#define CARD_H

#include <iostream>
using namespace std;


class Card
{
  private:
    string value;
    string suit;
    int id;
    bool inDeck;
    int number;

  public:
    Card();
    Card(string v, string s, int i);
    string getValue();
    string getSuit();
    int getId();
    bool isInDeck();
    void setInDeck(bool b);
    int getNumber();
};
#endif
