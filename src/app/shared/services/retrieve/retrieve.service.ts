import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Package} from './../../models/package';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieveService{
    private BaseUrl = '/api/';

    constructor (private http:Http){}

    //returns array of packages
    getTasksForStore(storeId):Observable<any[]>{
        return this.http.get(this.BaseUrl + "stores/" + storeId + "/tasks/retrieve")
                .map(this.extractData)
                .catch(this.handleError)
    }

    retrievePackage(packageId, data){
        this.http.post(this.BaseUrl + "packages/" + packageId + "/action/Retrieve", data)
                .catch(this.handleError)
    }




    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
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