//Components
import {OrderComponent} from './orders.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import { OrderRoutes as routes } from './orders.routes';

//Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../../layout/index';


@NgModule({
    declarations:[
        OrderComponent,
        OrderDetailsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule
    ],
    exports: [
    ]
})
export class OrderModule { }