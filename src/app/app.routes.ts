import {RouterModule, Routes} from '@angular/router'
import { FastComponent} from './fast/fast.component'
import {AppComponent} from './app.component';

export const routes: Routes = [
    {path:'', children:[
        {path:'fast', loadChildren: './fast/fast.module#FastModule'},
        {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
    ]}
];