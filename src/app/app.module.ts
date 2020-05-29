import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
