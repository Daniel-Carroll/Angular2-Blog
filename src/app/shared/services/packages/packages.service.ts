import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { HttpClient }          from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { AppConstants} from './../../../app.constants';
import {Package} from './../../models/package';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PackageService{
    private BaseUrl = '/api/';

    constructor (private http:Http){}

    //returns array of packages
    getPackagesInRecieve(storeId): Promise<Package[]>{
        return this.http.get(this.BaseUrl + "stores/" + storeId + "/packages")
                .toPromise()
                .then(response => Package.returnPackages(response.json()))
                .catch(this.handleError)
    }

    sendPackageAction(pkg: Package, packageAction: String): Promise<Package>{
        let headers = new Headers(AppConstants.CONFIG);
        let options = new RequestOptions({headers: headers})
        return this.http.post(this.BaseUrl + "packages/" + pkg + "/action/" + packageAction, options)
            .toPromise()
            .then(response => new Package(response.json()))
            .catch(this.handleError)
    }

    getPackageFromID(packageId: String, moduleNumber: String): Promise<Package>{
        let headers = new Headers(AppConstants.CONFIG)
        let options = new RequestOptions({headers: headers})
        return this.http.get(this.BaseUrl + "packages/" + packageId + "/module/" + moduleNumber, options)
            .toPromise()
            .then(response => new Package(response.json()))
            .catch(this.handleError)
    }

    retrievePackage(pkg: Package, storeId): Promise<Package>{
        let headers = new Headers(AppConstants.CONFIG);
        let options = new RequestOptions({headers: headers})
        return this.http.post(this.BaseUrl + "stores/" + storeId + "/packages", pkg, options)
            .toPromise()
            .then(response => new Package(response.json()))
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