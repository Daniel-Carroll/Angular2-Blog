import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
    {path:'', loadChildren: './home/home.module#HomeModule'},
    {path:'blog', loadChildren: './blog/blog.module#BlogModule'},
    {path:'editor', loadChildren: './editor/editor.module#EditorModule'}
];