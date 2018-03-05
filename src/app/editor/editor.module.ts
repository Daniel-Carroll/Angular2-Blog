import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill'

import {EditorComponent} from './editor.component';
import { EditorRoutes as routes } from './editor.routes';

//Module
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/index';

@NgModule({
    declarations:[
        EditorComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutModule,
        CommonModule,
        QuillModule
    ],
    exports: [
        
    ]
})
export class EditorModule { }