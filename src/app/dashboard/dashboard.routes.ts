import {OrderTrackerComponent} from './order-tracker/order-tracker.component';
import {DashboardComponent} from './dashboard.component';

export const DashboardRoutes = [
  { path: '', component: DashboardComponent, children:[
    { path: 'order-tracker', component: OrderTrackerComponent}
  ]}
  
];