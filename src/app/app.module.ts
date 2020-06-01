import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AdminAppModule } from './admin-app/admin-app.module';
import { AdminRoutingModule } from './admin-app/admin-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminAppModule,
    PlayersModule,
    AdminRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
