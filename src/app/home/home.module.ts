import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import { HomeRoutes as routes } from './home.routes';

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        
    ]
})
export class HomeModule { }

