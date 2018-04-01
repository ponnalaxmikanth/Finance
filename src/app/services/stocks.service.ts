import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Istocks } from '../../interface/stocks';

 const httpOptions = {
   headers :new HttpHeaders({
     'Content-Type':'application/json'
   })
 };

@Injectable()
export class StocksService {
  data: any;
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
   }

  public getStocks(fromdt:Date,todt:Date)
   {
     var request ={
      fromdate:fromdt,
      todate:todt
     };
      return this.httpClient.post<Istocks[]>(this.baseUrl + '/api/Stocks', JSON.stringify(request), httpOptions);
  }

}
