import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {ToolsService} from '../../shared/services/tools/tools.service'

@Component({
  selector: 'coupons',
  templateUrl: './coupons.component.html',
  providers: [ToolsService],
  styleUrls: ['./coupons.component.css']
})
export class CouponComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  couponId: string;
  couponList:any[];
  currentStore: String;


  constructor(private couponService: ToolsService,
              private router: Router,
              private route:ActivatedRoute){
                this.currentStore = window.localStorage.getItem("defaultStore");
              }

  ngOnInit(){
    this.getCoupons(this.currentStore);
  }

  printCoupon(couponId){
      this.couponId = couponId;
  }

  getCoupons(storeId){
    this.dataLoading = true;
    this.couponService.getCoupons(storeId)
            .then(
              data => {
                this.couponList = data;
                this.dataLoading=false;
                console.log(this.couponList);
              }
            )
  }

}