import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YoutubeComponent } from './youtube.component';
// import { YoutubeService } from '../youtube.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        YouTubePlayerModule
    ],
    declarations: [
        YoutubeComponent
    ],
    providers: [
        // YoutubeService
    ],
    exports: [
        YoutubeComponent
    ]
})
export class YoutubeModule { }