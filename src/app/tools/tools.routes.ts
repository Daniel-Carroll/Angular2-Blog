import {ToolsComponent} from './tools.component';
import {CouponComponent} from './coupons/coupons.component';

export const ToolsRoutes = [
  {
    path:'',
    redirectTo: 'coupons',
    pathMatch: 'full'
  },
  { path: '', component: ToolsComponent, children: [
    { path: 'coupons', component: CouponComponent}
  ] } 
  
];