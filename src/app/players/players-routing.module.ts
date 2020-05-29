import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './players.component';

const playersRoutes: Routes = [
    {
        path: 'player',
        children: [
            { path: 'all', component: PlayersComponent }
            // { path: ':id', component: DetailPlayerComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PlayersRoutingModule { }