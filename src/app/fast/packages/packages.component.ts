import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackageComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  taskList:any[];
  currentStore: number;

  constructor(private router: Router){}

  ngOnInit(){
    this.currentStore = 623;
  }

}