import { FastRoutes as routes } from './fast.routes';
import {FastComponent} from './fast.component';
import { PackageComponent } from './packages/packages.component';
import { TaskComponent } from './tasks/tasks.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import{ EditorModule } from './../editor/editor.module'

//Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';
import {OrderModule} from './orders/orders.module';


@NgModule({
    declarations:[
        FastComponent,
        PackageComponent,
        TaskComponent,
        ShipmentsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule,
        OrderModule
    ],
    exports: [
    ]
})
export class FastModule { }