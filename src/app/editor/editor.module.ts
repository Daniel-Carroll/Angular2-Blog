import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill'

import {EditorComponent} from './editor.component';
import { EditorRoutes as routes } from './editor.routes';

@NgModule({
    declarations:[
        EditorComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        QuillModule
    ],
    exports: [
        
    ]
})
export class EditorModule { }