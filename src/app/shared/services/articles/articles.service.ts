import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService{
    private BaseUrl = 'http://localhost:5000/api';

    constructor (private http:Http){}

    //returns array of blog posts from server
    getAllArticles(): Observable<any[]>{
        return this.http.get(this.BaseUrl + '/articles')
                .map(this.extractData)
                .catch(this.handleError)
    }

    getArticlesById(postId): Observable<any>{
      return this.http.get(this.BaseUrl + '/articles/' + postId)
                .map(this.extractData)
                .catch(this.handleError)
    }

    postArticle(article): Promise<any>{
      return this.http.post(this.BaseUrl + "articles", article)
        .toPromise()
        .then(response => response.json())
        .then(this.handleError)

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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}