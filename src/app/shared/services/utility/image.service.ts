import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ImageService{
    private baseUrl = 'http://images.heb.com/is/image/HEBGrocery/';
    private imageSize = '-1?medium$';
    private imageUrl = null;
    private strLength = 9

    constructor (){}

    getImageUrl(productId: string){

        if(productId != null){
            while(productId.length != this.strLength){
                productId = "0".concat(productId);
            }
            this.imageUrl = this.baseUrl + productId + this.imageSize;
            return this.imageUrl;
        }else{
            return ""
        }
    }

}