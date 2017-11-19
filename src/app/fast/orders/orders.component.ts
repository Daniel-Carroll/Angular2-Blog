import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Order} from './../../shared/models/orders';
import {ActivatedRoute} from '@angular/router';

import {OrderService} from '../../shared/services/orders/orders.service'

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  providers: [OrderService],
  styleUrls: ['./orders.component.css']
})
export class OrderComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  orderId: string;
  orderList:Order[];
  currentStore: number;
  sidenavOpen: boolean;


  constructor(private orderService: OrderService,
              private router: Router,
              private route:ActivatedRoute){
                //the defacto way to retrive a parameter from a route
                this.orderId = route.snapshot.params['id']
              }

  ngOnInit(){
    this.sidenavOpen = true;
    this.currentStore = 623;
    this.getOrders(this.currentStore);
  }

  onSelect(orderId){
      this.orderId = orderId;
  }

  getOrders(storeId){
    this.dataLoading = true;
    this.orderService.getOrdersByStore(storeId)
            .then(
              data => {
                this.orderList = data;
                this.orderId = data[0].externalOrderId;
                this.dataLoading=false;
                console.log(this.orderList)
              }
            )
  }

}