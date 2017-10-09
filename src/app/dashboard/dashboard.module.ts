//Components
import {OrderTrackerComponent} from './order-tracker/order-tracker.component';
import {DashboardComponent} from './dashboard.component';
import { DashboardRoutes as routes } from './dashboard.routes';

//Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';


@NgModule({
    declarations:[
        DashboardComponent,
        OrderTrackerComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule
    ],
    exports: [
    ]
})
export class DashboardModule { }