import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

import {DashboardService} from '../../shared/services/dashboard/dashboard.service'

@Component({
  selector: 'order-tracker',
  templateUrl: './order-tracker.component.html',
  providers: [DashboardService],
  styleUrls: ['./order-tracker.component.css']
})
export class OrderTrackerComponent implements OnInit{
  displayedColumns = ['pickupTime', 'orderId', 'status', 'ordered', 'picked', 'dry', 'refrigerated', 'frozen', 'bulk', 'hot'];
  dataLoading:boolean;
  errorMessage: string;
  dashboard:any[];
  currentStore: number;
  dataSource: OrderDataSource | null;

  constructor(private dashboardService: DashboardService,
              private router: Router){}

  ngOnInit(){
    this.currentStore = 85;
    this.getOrderTracker(this.currentStore);
  }

  ngAfterViewInit(){
      
  }


  onSelect(orderId){
      this.router.navigate(['/order', orderId])
  }

  getOrderTracker(storeId){
    this.dataLoading = true;
    this.dashboardService.getDashboardByStore(storeId, '16-Sep-2017', '17-Sep-2017')
            .subscribe(
              data => {
                this.dataSource = new OrderDataSource(data);
                this.dataLoading=false;
              },
              error =>  {
                this.errorMessage = <any>error;
                this.dataLoading = false;
              }
            )
  }

}

export class OrderDataSource extends DataSource<any>{
    constructor(private dashboard){
        super();
    }

    subject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.dashboard);

    connect(): Observable<any[]>{
        return this.subject;
    }

    disconnect() {}
}
