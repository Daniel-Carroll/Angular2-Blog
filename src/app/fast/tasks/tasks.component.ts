import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  taskList:any[];
  currentStore: number;

  constructor(private router: Router){}

  ngOnInit(){
    this.currentStore = 623;
  }

}