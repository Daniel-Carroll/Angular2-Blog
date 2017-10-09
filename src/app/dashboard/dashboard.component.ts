import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

     ngOnInit(){

    }

    navLinks = [
      {path:'order-tracker', label: 'Order Tracker'},
      {path:'productivity', label: 'Productivity'},
      {path:'stats', label: 'Stats'}
    ]

}