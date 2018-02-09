import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from './../../../shared/services/utility/image.service';
import {ProductService} from './../../../shared/services/products/products.service';
import {AppConstants} from './../../../app.constants';
import {Product} from './../../../shared/models/product'

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  providers: [ImageService, ProductService],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

    @Input() product; 
    @Input() height;
    packageId: String;
    damageAction = AppConstants.ProductActions.damage;
    lostAction = AppConstants.ProductActions.lost;
    shortAction = AppConstants.ProductActions.short;

    constructor(private imageService: ImageService, private productService: ProductService){}

  ngOnInit(){
    if(this.product.packageDetailArray.length > 0){
      this.packageId = this.product.packageDetailArray[0].packageId;
    }
  }

  getImageUrl(productId: any){
    return this.imageService.getImageUrl(productId);
  }

  productAction(quantity: Number, 
                packageDetailQuantityTypeCode: String, 
                moduleNumber: Number, 
                action: String){
      console.log(action + " product " + this.product.productId + " In Package " + this.packageId)
      return this.productService.sendProductAction(this.packageId, this.product, quantity, packageDetailQuantityTypeCode, moduleNumber, action)
            .then(function(data){
              this.product = data;
            })
  }

}