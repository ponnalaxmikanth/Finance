import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({ providedIn: 'root' })

export class HomeexpensesService {

  baseUrl: string;
  public accountTypes: any;
  public acounts: any;
  public expenseGroups: any;
  public expenseSubGroups: any;

  public addTransaction: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;

    this.getAccountTypes().subscribe(val => {
      this.accountTypes = val;
      // console.log('HomeexpensesService -- getAccountTypes', this.accountTypes);
    },
    error => {
      console.error('HomeexpensesService -- getAccountTypes', error);
    });

    this.getAccountDetails().subscribe(val => {
      this.acounts = val;
      // console.log('HomeexpensesService -- getAccountDetails', this.acounts);
    },
    error => {
      console.error('HomeexpensesService -- getAccountDetails', error);
    });

    this.getExpenseGroups().subscribe(val => {
      this.expenseGroups = val;
      // console.log('HomeexpensesService -- getExpenseGroups', this.expenseGroups);
    },
    error => {
      console.error('HomeexpensesService -- getExpenseGroups', error);
      });

    this.getExpenseSubGroups().subscribe(val => {
      this.expenseSubGroups = val;
      // console.log('HomeexpensesService -- GetExpenseSubGroups', this.expenseSubGroups);
    },
      error => {
        console.error('HomeexpensesService -- GetExpenseSubGroups', error);
      });
  }

  getAccountTypes(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetAccountTypes', httpOptions);
  }

  getAccountDetails(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetAccountDetails', httpOptions);
  }

  getExpenseGroups(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetExpenseGroups', httpOptions);
  }

  getExpenseSubGroups(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetExpenseSubGroups', httpOptions);
  }

  getItems(item: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetItems/' + item, httpOptions);
  }

  getStores(store: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/Expenses/GetStores/' + store, httpOptions);
  }

  addExpense(request): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/Expenses/AddExpense', request, httpOptions);
  }

  getTransactions(fromDate, toDate, accountId: number): Observable<any> {
    const request = { FromDate: fromDate, ToDate: toDate, AccountId: accountId };
    return this.httpClient.post(this.baseUrl + 'api/Expenses/GetExpenses', request, httpOptions);
  }

  getExpenseTransactions(fromDate, toDate): Observable<any> {
    const request = { FromDate: fromDate, ToDate: toDate };
    return this.httpClient.post(this.baseUrl + 'api/Expenses/GetBudget', request, httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    console.error('HomeexpensesService -- api call error', error);
  }
 getBudgetDetails(): Observable<any> {
   try {
      return this.httpClient.get('assets/Data/Budget/budget.json');
   } catch (exc) {
     console.log('home expenses service--getbudgetdetails', exc);
   }
 }
}
