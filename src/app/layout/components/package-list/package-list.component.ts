import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductCardComponent} from './../product-card/product-card.component'

@Component({
  selector: 'package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit{

    @Input() packageList;

  ngOnInit(){
    
  }

}