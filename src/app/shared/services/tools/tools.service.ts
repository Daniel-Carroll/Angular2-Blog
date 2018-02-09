import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { AppConstants} from './../../../app.constants';
import {Order} from './../../models/orders';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolsService{

    constructor (private http:Http){}

    //returns array of blog posts from server
    getCoupons(storeId): Promise<any[]>{
        return this.http.get(AppConstants.BASE_URL + "coupons/stores/" + storeId + "/getCoupons")
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError)
    }

    getCouponPDF(couponId): Promise<any>{
      return this.http.get(AppConstants.BASE_URL + "coupons/retrieve/pdf/" + couponId)
                .toPromise()
                .then(response => new Order(response.json()))
                .catch(this.handleError)
    }

    private extractOrders(res: Response) {
        let body = res.json() as Order[];
        return body;
  }

    private extractOrderDetails(res: Response){
        let body = res.json() as Order;
        return body;
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