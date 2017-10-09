import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order} from './../../../shared/models/orders';

import {OrderService} from '../../../shared/services/orders/orders.service'

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  providers: [OrderService],
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnChanges{


  dataLoading:boolean;
  @Input() orderId: string;  
  errorMessage: string;
  selectedOrder:Order;

  constructor(private orderService: OrderService){}

  ngOnInit(){
    this.getOrderDetails(this.orderId);
  }

  ngOnChanges(changes: SimpleChanges){
    this.getOrderDetails(this.orderId)
  }

  getOrderDetails(orderId){
    this.dataLoading = true;
    this.orderService.getOrderDetails(orderId)
            .then(
              data => {
                this.selectedOrder = data;
                console.log(this.selectedOrder)
                this.dataLoading = false;
              },
              error => {
                this.errorMessage = <any>error
                 this.dataLoading = false;
              }
            )
  }

}