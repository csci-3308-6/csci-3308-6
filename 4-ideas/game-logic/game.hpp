#ifndef GAME_H
#define GAME_H

#include <iostream>
#include <vector>
#include <stack>
#include "Card.hpp"
#include "Player.hpp"
using namespace std;


class Game
{
  private:
    vector<Player> players;
    Card allCards[104];
    stack<Card> deck;
    int cardsLeft;
    bool running; //game is running

  public:
    Game(); //add dealer player
    void initializeDeck();
    vector<Player> getPlayers();
    void turn(Player &p); //a player can either hit, stand, double etc.
    void shuffle(); //remove all cards from deck, add all cards to stack in random order
    void dealCards();
    int getCardsLeft();
    void addDealer();
    void addPlayer();
    void removePlayer(Player p);
    void reBuyin(Player p);
    void hit(Player &p); //if going over while holding ace, change ace to a 1
    void stand(Player p); //if holding ace, take higher number
    void doubleDown(Player &p);
    void displayCards(bool showDealer);
    void runRound(); //play one round
    void runGame(); //add players, loop through turns
};
#endif
