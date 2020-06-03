import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  youtubeUrl: string;
  playlistID: string = '';
  player: YT.Player;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
   }

  startVideo(): void {
    console.log(`playlistID : ${this.playlistID}`);
    this.removePlayer();

    this.player = new YT.Player('player', {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 0,
        rel: 0,
        showinfo: 1,
        fs: 1,
        playsinline: 1,
        list: this.playlistID,
      },
      height: 200,
      width: 700,
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
      }
    });
    console.log(this.player);
  }

  onPlayerStateChange(event): void {
    console.log(event);

    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        console.log('nouvelle vidéo lancée !!!');
        break;

      case window['YT'].PlayerState.PAUSED:
        break;

       case window['YT'].PlayerState.ENDED:
         break;
    }
  }

  onPlayerError(event): void {
    switch(event.data) {
      case 2:
        break;

      case 100:
        break;

      case 101 || 150:
        break;
    }
  }

  searchVideoByUrl(): void {
    let urlParams = this.youtubeUrl.split("list=");
    this.playlistID = urlParams[1];
    this.youtubeUrl = '';
    this.startVideo();
  }

  removePlayer(): void {
    if (this.player) {
      $('#player').remove();
      $('#playerContainer').append('<div id="player"></div>');
    }
  }
}
