import { Component, OnInit } from '@angular/core';

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
  private isVideoPaused: boolean = true;
  index: number;
  playerSize: number;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.hideControls();
  }

  startVideo(): void {
    this.removePlayer();

    this.player = new YT.Player('player', {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 0,
        disablekb: 0,
        rel: 0,
        showinfo: 1,
        fs: 1,
        playsinline: 1,
        list: this.playlistID,
        enablejsapi: 1,
        origin: 'http://localhost:4200',
        autohide: 1
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
    this.index = this.currentPlayer.getPlaylistIndex() + 1;
    this.playerSize = this.currentPlayer.getPlaylist().length;
    
  }

  onPlayerStateChange(event): void {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        console.log("PLAYING" + " - " + event.data);
        this.index = this.currentPlayer.getPlaylistIndex() + 1;
        this.isVideoPaused = false;
        break;

      case window['YT'].PlayerState.PAUSED:
        console.log("PAUSED" + " - " + event.data);
        this.isVideoPaused = true;
        break;

      case window['YT'].PlayerState.ENDED:
        break;

      case window['YT'].PlayerState.CUED:
        break;
        
      case window['YT'].PlayerState.UNSTARTED:
        break;

      case window['YT'].PlayerState.BUFFERING:
        break;
    }
  }

  onPlayerError(event): void {
    // switch(event.data) {
    //   case 2:
    //     break;

    //   case 100:
    //     break;

    //   case 101 || 150:
    //     break;
    // }
  }

  searchVideoByUrl(): void {
    if (this.youtubeUrl) {
      if (this.youtubeUrl.indexOf(this.YTListParam) !== -1) {
        let urlParams = this.youtubeUrl.split(this.YTListParam);
        this.playlistID = urlParams[1];
        this.startVideo();
        this.showControls();
      } else {
        console.log("format de la playlist youtube incorrect ...");
      }
      this.youtubeUrl = '';
    }
  }

  removePlayer(): void {
    if (this.player) {
      $('#player').remove();
      $('<div id="player"></div>').insertBefore($('#playerControlls'));
    }
  }

  playNextVideo(): void {
    this.currentPlayer.nextVideo();
    this.initializeCheckedButtons();

    if (this.index === this.playerSize) {
      this.finishBlindTest();
    }
  }

  playPauseVideo(): void {
    if (this.isVideoPaused) {
      this.currentPlayer.playVideo();
      $('#playPauseButton i').text('pause');
    } else {
      this.currentPlayer.pauseVideo();
      $('#playPauseButton i').text('play_arrow');
    }
  }

  playPreviousVideo(): void {
    this.currentPlayer.previousVideo();
  }

  hideControls(): void {
    $('#nextButton').hide();
    $('#playPauseButton').hide();
    $('#previousButton').hide();
    $('#playlistIndex').hide();
  }

  showControls(): void {
    $('#nextButton').show();
    $('#playPauseButton').show();
    $('#previousButton').show();
    $('#playlistIndex').show();
  }

  initializeCheckedButtons(): void {
    $('li i').removeClass('icon-disabled');
  }

  finishBlindTest(): void {
    $('#nextButton').addClass('disabled');
  }
}
