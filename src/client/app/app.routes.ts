import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'', loadChildren: './home/home.module#HomeModule'},
    {path:'blog', loadChildren: './blog/blog.module#BlogModule'},
    {path:'editor', loadChildren: './editor/editor.module#EditorModule'}
];