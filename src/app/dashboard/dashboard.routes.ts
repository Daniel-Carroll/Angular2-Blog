import {OrderTrackerComponent} from './order-tracker/order-tracker.component';
import {DashboardComponent} from './dashboard.component';
import {ProductivityComponent} from './productivity/productivity.component';

export const DashboardRoutes = [
  { path: '', component: DashboardComponent, children:[
    { path: 'order-tracker', component: OrderTrackerComponent},
    { path: 'productivity', component: ProductivityComponent}
  ]}
  
];