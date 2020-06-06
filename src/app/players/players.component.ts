import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayersService } from './players.service';

import * as $ from 'jquery';

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

  addScoreToPlayer(id: number, event: Event): void {
    let elementId: string = (event.target as Element).id;
    if (!this.playerAlreadyFound(elementId)) {
      this.playersService.addValueToPlayer(id, this.valueToAdd);
      $(`#${elementId}`).addClass('icon-disabled');
    }
  }

  playerAlreadyFound(elementId: string): boolean {
    let found: boolean = false;
    let classList = $(`#${elementId}`).attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
      if (item === "icon-disabled") {
        found = true;
      }
    });
    return found;
  }
}
