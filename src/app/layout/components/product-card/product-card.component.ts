import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  providers: [],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

    @Input() product;
    @Input() height;

  ngOnInit(){
    
  }

}