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
  currentVideoName: string;
  endValue: number = 45;
  timeLeft: number;
  timerStartDate: number;
  timerPauseDate: number;
  timer: any;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.hideControls();
  }

  initializePlayer(): void {
    this.removePlayer();

    this.player = new YT.Player('player', {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 0,
        disablekb: 0,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1,
        list: this.playlistID,
        enablejsapi: 1,
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
    this.timeLeft = this.endValue;
    this.currentPlayer.setVolume(100);
  }

  onPlayerStateChange(event): void {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        this.index = this.currentPlayer.getPlaylistIndex() + 1;
        this.playerSize = this.currentPlayer.getPlaylist().length;
        this.currentVideoName = event.target.getVideoData().title;
        this.isVideoPaused = false;
        this.initializeTimer(this.endValue);
        break;

      case window['YT'].PlayerState.PAUSED:
        this.isVideoPaused = true;
        this.endTimer();
        break;

      // case window['YT'].PlayerState.ENDED:
      //   break;

      // case window['YT'].PlayerState.CUED:
      //   break;
        
      // case window['YT'].PlayerState.UNSTARTED:
      //   break;

      // case window['YT'].PlayerState.BUFFERING:
      //   break;
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
        
        this.initializePlayer();
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

    if (this.index >= this.playerSize) {
      this.finishBlindTest();
      this.endTimer();
    }
  }

  playPauseVideo(): void {
    if (this.isVideoPaused) {
      this.currentPlayer.playVideo();
      this.initializeTimer(this.timeLeft);
      console.log(`timer : ${this.timeLeft}`);
      
      $('#playPauseButton i').text('pause');
    } else {
      this.currentPlayer.pauseVideo();
      this.timeLeft = this.getTimeLeft();
      this.endTimer();
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

  initializeTimer(timerValue: number): void {
    this.timerStartDate = Date.now();
    this.timer = setTimeout(() => {
      this.playNextVideo();
    }, 1000 * timerValue)
  }

  endTimer(): void {
    console.log("timer stopped");
    
    clearTimeout(this.timer);
  }

  getTimeLeft(): number {
    this.timerPauseDate = Date.now();
    let variable: Date = new Date(this.timerPauseDate - this.timerStartDate);
    console.log(variable);
    
    return variable.getDate();
  }
}
