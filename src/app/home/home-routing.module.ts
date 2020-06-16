import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class HomeRoutingModule { }