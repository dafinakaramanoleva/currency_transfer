import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Rate } from './rate';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

let headers = new Headers({'Authorization': 'Basic ' +  btoa('stevan@litobac.com:zg758gA4XplGhXWDagQL7tfeNM9qsNyq'), 'Content-Type': 'application/json' });
let options = new RequestOptions({headers: headers});

@Injectable()
export class RateCurrencyService {
    rates: Rate[] = [];
    getAllRatesUrl:string = 'http://stage.currencytransfer.com/api/v1/rate_alerts?order=created_at%3Adesc';
    ratesUrl: string = 'http://stage.currencytransfer.com/api/v1/rate_alerts/';

    constructor(private http: Http) { }

    getAllRates(): Observable<Rate[]> {
        return this.http.get(this.getAllRatesUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(rate: Object): Observable<Rate> {
        return this.http.post(this.ratesUrl, { rate }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleterateById(id: string): Observable<any> {
        return this.http.delete(`${this.ratesUrl}/${id}`, options) // ...using put request
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
