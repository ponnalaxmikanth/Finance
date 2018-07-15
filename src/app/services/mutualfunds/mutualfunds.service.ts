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
  public redeenUnits: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public addDividend: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public fundHouses: any;
  public fundTypes: any;
  public fundCategory: any;
  public fundOptions: any;
  public funds: any;
  public myFunds: any;
  public folios: any;
  public portfolios: any;

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

  getFunds(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFunds', httpOptions);
  }

  getMyFunds(request): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/MutualFunds/GetMyFunds', request, httpOptions);
  }

  getFolios(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetFolios', httpOptions);
  }

  getPortFolios(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetPortfolios', httpOptions);
  }

  addPurchase(request): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/MutualFunds/AddTransaction', request, httpOptions);
  }

  getFundNav(request): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/MutualFunds/GetFundNav', request, httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    console.log('MutualfundsService -- api call error', error);
  }

}
