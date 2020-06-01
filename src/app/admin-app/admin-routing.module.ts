import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAppComponent } from './admin-app.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        children: [
            { path: '', component: AdminAppComponent }
            // { path: ':id', component: DetailPlayerComponent }
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