import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playersService: PlayersService) { }

  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
  }

}
