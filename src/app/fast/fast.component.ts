import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css']
})
export class FastComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute){
      router.navigate(['packages'], {relativeTo: route})
    }
     ngOnInit(){

    }
    

    navLinks = [
      {path:'packages', label: 'Packages'},
      {path: 'shipments', label: 'Shipments'},
      {path:'orders', label: 'Orders'},
      {path:'tasks', label: 'Tasks'}
    ]

}