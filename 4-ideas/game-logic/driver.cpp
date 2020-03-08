#include <iostream>
#include "Game.hpp"

int main()
{
  cout<<"Welcome to BlackJack!"<<endl;
  Game g;

  g.addPlayer();
  //vector<Player> p = g.getPlayers();
  //cout<<p[0].getName()<<endl;
  //cout<<p[1].getName()<<endl;
  g.runGame();


}
