import { Injectable } from '@angular/core';

import { Player } from './players/player';
import { PLAYERS } from './players/mock-playerlist';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }

  getPlayer(id: number): Player {
    let players = this.getPlayers();

    for (let i = 0; i < players.length; i++) {
      if (id === players[i].id)
        return players[i];
    }
  }
}
