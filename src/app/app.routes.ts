import {RouterModule, Routes} from '@angular/router'
import { FastComponent} from './fast/fast.component'
import {LoginComponent} from './login/login.component'
import {AppComponent} from './app.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {path:'', children:[
        {path:'fast', loadChildren: './fast/fast.module#FastModule'},
        {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
        {path: 'tools', loadChildren: './tools/tools.module#ToolsModule'}
    ]}
];