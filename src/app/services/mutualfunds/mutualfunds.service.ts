import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class MutualfundsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public addMFTransactions: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  getFundHouses(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFundHouses', httpOptions);
  }

  getFundTypes(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFundTypes', httpOptions);
  }

  getFundCategory(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFundCategory', httpOptions);
  }

  getFundOptions(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFundOptions', httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    console.log('MutualfundsService -- api call error', error);
  }

}
