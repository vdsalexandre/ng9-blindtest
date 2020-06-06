import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  valueToAdd: number = 2;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
  }

  addScoreToPlayer(id: number): void {
    this.playersService.addValueToPlayer(id, this.valueToAdd);
  }
}
