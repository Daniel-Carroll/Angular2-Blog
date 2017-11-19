import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

import {DashboardService} from '../../shared/services/dashboard/dashboard.service'

@Component({
  selector: 'productivity',
  templateUrl: './productivity.component.html',
  providers: [DashboardService],
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  productivityDashboard:any[];
  currentStore: number;

  constructor(private dashboardService: DashboardService,
              private router: Router){}

  ngOnInit(){
    this.currentStore = 85;
    this.getProductivityForStore();
  }

  ngAfterViewInit(){
      
  }

  getProductivityForStore(){
      this.dataLoading = true;
        this.dashboardService.getProductivityByStore(this.currentStore, '10-Sep-2017', '11-Sep-2017')
            .subscribe(
                data => {
                    this.productivityDashboard = data;
                    this.dataLoading = false;
                },
                error =>  {
                    this.errorMessage = <any>error;
                    this.dataLoading = false;
                  }
            )
  }



}