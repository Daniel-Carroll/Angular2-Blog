import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit{

     ngOnInit(){

    }

    navLinks = [
      {path: 'coupons', label: 'Coupons'},
      {path:'label-generator', label: 'Labels'},
      {path: 'inventory-report', label: 'Inventory Report'}
      
    ]

}