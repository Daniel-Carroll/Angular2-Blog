import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from './../../../shared/services/utility/image.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  providers: [ImageService],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

    @Input() product;
    @Input() height;

    constructor(private imageService: ImageService){}

  ngOnInit(){
    
  }

  getImageUrl(productId: any){
    return this.imageService.getImageUrl(productId);
  }

}