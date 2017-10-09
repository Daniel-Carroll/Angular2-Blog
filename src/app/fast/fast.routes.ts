import { OrderComponent } from './orders/orders.component';
import {OrderDetailsComponent} from './orders/order-details/order-details.component';
import { PackageComponent } from './packages/packages.component';
import { TaskComponent } from './tasks/tasks.component';
import {FastComponent} from './fast.component';
import {RouterModule, Routes} from '@angular/router'

export const FastRoutes = [
  { path: '', component: FastComponent, children: [
    { path: 'orders', component: OrderComponent},
    { path: 'tasks', component: TaskComponent},
    {path:'packages', component: PackageComponent}
  ] } 
  
];