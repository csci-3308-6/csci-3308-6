#ifndef PLAYER_H
#define PLAYER_H

#include <iostream>
#include <vector>
#include "Card.hpp"
using namespace std;


class Player
{
  private:
    string name;
    int chips;
    vector<Card> hand;
    int bet;
    int cardsInHand;

  public:
    Player(string n, int c);
    string getName();
    int getChips();
    void adjustChips(int n);
    int getCardSum();
    void placeBet(int n);
    int getBet();
    int getCardsInHand();
    void clearHand();
    void addCard(Card c);
    vector<Card> getHand();
};
#endif
