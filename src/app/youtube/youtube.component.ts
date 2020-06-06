import { Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

import * as $ from 'jquery';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  private YTListParam: string = "list=";
  youtubeUrl: string;
  playlistID: string = '';
  player: YT.Player;
  currentPlayer: any;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
   }

  startVideo(): void {
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
        'onReady': this.onPlayerReady.bind(this)
      }
    });
    console.log(this.player);
  }

  onPlayerReady(event): void {
    this.currentPlayer = event.target;
  }

  onPlayerStateChange(event): void {
    console.log(event);

    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        this.currentPlayer.unMute();
        break;

      case window['YT'].PlayerState.PAUSED:
        this.currentPlayer.mute();
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
    if (this.youtubeUrl) {
      if (this.youtubeUrl.indexOf(this.YTListParam) !== -1) {
        let urlParams = this.youtubeUrl.split(this.YTListParam);
        this.playlistID = urlParams[1];
        this.startVideo();
      } else {
        console.log("format de la playlist youtube incorrect ...");
      }

      this.youtubeUrl = '';
    }
  }

  removePlayer(): void {
    if (this.player) {
      $('#player').remove();
      $('#playerContainer').append('<div id="player"></div>');
    }
  }
}
