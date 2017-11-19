import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css']
})
export class FastComponent implements OnInit{

     ngOnInit(){

    }
    

    navLinks = [
      {path:'packages', label: 'Packages'},
      {path:'orders', label: 'Orders'},
      {path:'tasks', label: 'Tasks'}
    ]

}