import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AdminAppModule } from './admin-app/admin-app.module';
import { AdminRoutingModule } from './admin-app/admin-routing.module';
import { YoutubeModule } from './youtube/youtube.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AdminAppModule,
    YoutubeModule,
    PlayersModule,
    AdminRoutingModule,
    HomeRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
