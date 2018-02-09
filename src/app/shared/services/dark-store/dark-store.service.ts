import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Pallet} from './../../models/pallet';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DarkStoreService{
    private BaseUrl = '/api/deliveries';

    constructor (private http:Http){}

    //returns array of shipments from server by store
    getShipmentsByStore(storeId): Promise<any[]>{
        return this.http.get(this.BaseUrl + "/stores/" + storeId + "/darkStoreShipments")
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError)
    }

    getPalletDetails(pallet): Promise<any>{
      return this.http.post(this.BaseUrl + "/pallet/" + pallet.palletId + "/getPalletDetails", pallet)
                .toPromise()
                .then(response => new Pallet(response.json()))
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