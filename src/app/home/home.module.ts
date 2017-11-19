import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import { HomeRoutes as routes } from './home.routes';

import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        LayoutModule
    ],
    exports: [
        
    ]
})
export class HomeModule { }

