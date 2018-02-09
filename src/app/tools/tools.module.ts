//Components
import {ToolsComponent} from './tools.component';
import { ToolsRoutes as routes } from './tools.routes';
import {CouponComponent} from './coupons/coupons.component';

//Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';


@NgModule({
    declarations:[
        ToolsComponent,
        CouponComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule
    ],
    exports: [
    ]
})
export class ToolsModule { }