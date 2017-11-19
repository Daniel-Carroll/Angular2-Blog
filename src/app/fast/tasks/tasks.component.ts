import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {RetrieveService} from '../../shared/services/retrieve/retrieve.service'
import {OrderService} from '../../shared/services/orders/orders.service'


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [RetrieveService, OrderService]
})
export class TaskComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  taskList:any[];
  selectedTask: any;
  currentStore: number;

  constructor(private retrieveService: RetrieveService, private orderService: OrderService, private router: Router){}

  ngOnInit(){
    this.currentStore = 623;
    this.getRetrieveTasks(this.currentStore);
  }

  getRetrieveTasks(storeId){
    this.dataLoading = true;
    return this.retrieveService.getTasksForStore(storeId)
                  .subscribe(
                    data => {
                      this.taskList = data;
                      this.dataLoading = false;
                      console.log(this.taskList);
                      this.selectedTask = this.taskList[0];
                      this.getOrderDetails(this.selectedTask.order.externalOrderId);
                    }
                  )
  }

  getOrderDetails(orderId){
    this.dataLoading = true;
    return this.orderService.getOrderDetails(orderId)
      .then(
        data => {
          this.selectedTask.orderDetails = data;
          console.log(this.selectedTask.orderDetails);
        }
      )
  }

  selectTask(task){
    this.selectedTask = task;
  }

}