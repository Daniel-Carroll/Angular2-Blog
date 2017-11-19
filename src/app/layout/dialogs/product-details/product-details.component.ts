import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from './../../../shared/services/utility/image.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  providers: [ImageService],
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsDialog implements OnInit{

    @Input() product;
    @Input() height;

    constructor(private imageService: ImageService){}

  ngOnInit(){
    
  }

  getImageUrl(productId: any){
    console.log("getting image...")
    return this.imageService.getImageUrl(productId);
  }

}