import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Istocks } from '../../interface/stocks';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

import { catchError, retry } from 'rxjs/operators';

 const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class StocksService {
  data: any;
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
   }

  getStocks(fromdt: Date, todt: Date) : Observable<any> {
     const request = { fromdate: fromdt, todate: todt };

     console.log('stocksService -- getStocks', this.baseUrl + 'api/Stocks/GetStocks', request);
     //return this.httpClient.post<Istocks[]>(this.baseUrl + 'api/Stocks', JSON.stringify(request), httpOptions);

     return this.httpClient.post(this.baseUrl + 'api/Stocks/GetStocks', JSON.stringify(request), httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    console.log('api call error', error);
  }

}
