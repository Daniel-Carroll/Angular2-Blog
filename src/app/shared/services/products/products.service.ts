import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { AppConstants} from './../../../app.constants';
import {Package} from './../../models/package';
import {Product} from './../../models/product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    private BaseUrl = AppConstants.BASE_URL;

    constructor (private http:Http){}

    //returns array of packages
    sendProductAction(packageId: String, 
        product: Product, 
        quantity: Number, 
        packageDetailActionTypeCode: String, 
        moduleNumber: Number, 
        action: String): Promise<any[]>{
        console.log(product);
        //data to send to the server 
        let data = {
            fulfillmentOrderId: product.fulfillmentOrderId,
            externalShipmentId: product.externalShipmentId,
            actualSupplierShippingTimestamp: product.actualSupplierShippingTimestamp,
            sequenceNumber: product.sequenceNumber,
            module: moduleNumber,
            orderDetailQuantity: quantity,
            packageDetailActionTypeCode: packageDetailActionTypeCode,
            latestUpdateUID: 'c592690'
        }
        return this.http.post(this.BaseUrl + "packages/" + packageId + "/products/" + product.productId + "/action/" + action, data)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError)
    }

  private handleError (error: any): Promise<any>{
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }

}