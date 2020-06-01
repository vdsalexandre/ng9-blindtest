import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppComponent } from './admin-app.component';
import { PlayersModule } from '../players/players.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PlayersModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminAppComponent,
    ],
    providers: []
})
export class AdminAppModule { }