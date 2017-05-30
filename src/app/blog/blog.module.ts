//Components
import {BlogComponent} from './blog.component';
import {BlogDetailsComponent} from './blog-post-details/blog-post-details.component';
import { BlogRoutes as routes } from './blog.routes';

//Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';


@NgModule({
    declarations:[
        BlogComponent,
        BlogDetailsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule
    ],
    exports: [
    ]
})
export class BlogModule { }