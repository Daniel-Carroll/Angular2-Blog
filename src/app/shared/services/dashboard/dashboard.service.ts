import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService{
    private BaseUrl = '/api/';

    constructor (private http:Http){}

    //returns Order Tracker Dashboard from server  
    getDashboardByStore(storeId, startDate, endDate): Observable<any[]>{
        return this.http.get(this.BaseUrl + "stores/" + storeId + "/startDate/" + startDate + "/endDate/" + endDate +  "/dashboard")
                .map(this.extractData)
                .catch(this.handleError)
    }

    //returns Productivity Metrics for store level from server  
    getProductivityByStore(storeId, startDate, endDate): Observable<any[]>{
        return this.http.get(this.BaseUrl + "stores/" + storeId + "/startDate/" + startDate + "/endDate/" + endDate +  "/storeProductivityDashboard")
                .map(this.extractData)
                .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}