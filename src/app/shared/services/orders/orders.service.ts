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
export class OrderService{

    constructor (private http:Http){}

    //returns array of blog posts from server
    getOrdersByStore(storeId): Promise<Order[]>{
        return this.http.get(AppConstants.BASE_URL + "stores/" + storeId + "/orders")
                .toPromise()
                .then(response => Order.returnOrders(response.json()))
                .catch(this.handleError)
    }

    getOrderDetails(orderId): Promise<any>{
      return this.http.get(AppConstants.BASE_URL + "orders/" + orderId + "/module/2")
                .toPromise()
                .then(response => new Order(response.json()))
                .catch(this.handleError)
    }

    finalizeOrder(orderId): Promise<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers})
        return this.http.post(AppConstants.BASE_URL + "orders/" + orderId + "/users/" + "c592690" + "/finalize", options)
            .toPromise()
            .then(response => new Order(response.json()))
            .catch(this.handleError)
    }

    closeOrder(order): Promise<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers})
        return this.http.post(AppConstants.BASE_URL + "orders/" + order.externalOrderId + "/action/close", order, options)
            .toPromise()
            .then(response => new Order(response.json()))
            .catch(this.handleError)
    }

    reviewStatus(storeId): Promise<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        return this.http.post(AppConstants.BASE_URL + "orders/" + storeId + "/orders/reviewStatus", options)
            .toPromise()
            .then(response => new Order(response.json()))
            .catch(this.handleError)
    }

    resolveFlag(orderId, orderAction){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        return this.http.post(AppConstants.BASE_URL + "orders/" + orderId + "/setResolveFlag", orderAction, options)
    }

    getOrderHistory(orderId): Promise<any>{
        return this.http.get(AppConstants.BASE_URL + "history/order/" + orderId)
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