import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAppComponent } from './admin-app.component';
import { AuthGuardService } from '../auth-guard.service';

const adminRoutes: Routes = [
    {
        path: 'admin',
        canActivate: [AuthGuardService],
        children: [
            { path: 'view', component: AdminAppComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }