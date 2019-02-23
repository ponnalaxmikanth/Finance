import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { HomeexpensesService } from '../services/homeexpenses/homeexpenses.service';
import { AccountDetails, AccountType, Transaction, Hometransactions } from '../models/hometransactions';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {

  public sidebars: any = {
    addExpense: false,
    
  };
  public fromDate: Date = new Date();
  public toDate: Date = new Date();
  public transactions: Hometransactions[];
  public newTransaction: boolean = false;
  public transaction: Transaction = new Transaction();
  public selectedTransaction: Transaction;
  public cols: any[];
  public displayDialog: boolean = false;
  private selectedTab: number = 0;

  constructor(calendar: NgbCalendar, public _homeExpensesService: HomeexpensesService) {
    //console.log('HomeExpensesComponent -- constructor', calendar.getToday()
    //  , calendar.getNext(calendar.getToday(), 'd', 10)
    //  , calendar.getNext(calendar.getToday(), 'd', 1));
    //let now = new Date();
    //let yr = now.getFullYear();
    //let month = now.getMonth() + 1;
    //let day = new Date(yr, month, 0).getDate();
    //this.fromDate = { year: yr, month: month, day: day };

    var now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.getTransactions(1);
  }

  ngOnInit() {
    this.cols = [
      { field: 'Date', header: 'Date' },
      { field: 'GroupName', header: 'Group' },
      { field: 'SubGroupName', header: 'Sub Group' },
      //{ field: 'ExpenseGroup.Name', header: 'Group' },
      //{ field: 'ExpenseSubGroup.SubGroupName', header: 'Sub Group' },
      { field: 'Item', header: 'Item' },
      { field: 'Amount', header: 'Amount' },
      { field: 'Store', header: 'Store' },
      { field: 'TransactedBy', header: 'Transacted By' }
    ];
    this._homeExpensesService.addTransaction.subscribe((val: boolean) => {
      this.sidebars.addExpense = val;
    });

    this.getTransactions(1);
  }

  getTransactions(accountId: number) {
    this._homeExpensesService.getTransactions(this.fromDate, this.toDate, accountId).subscribe((val: any) => {
      this.transactions = val;
      console.log('HomeExpensesComponent -- getTransactions', this.fromDate, this.toDate, this.transactions);
    });
  }

  showDialogToAdd() {
    try {
      //this.transaction = new Transaction();
      //this.transaction.Date = new Date();
      //this.displayDialog = true;

      this.sidebars.addExpense = true;
    }
    catch (ex) {
      console.error('showDialogToAdd - exception', ex);
    }
  }

  onRowSelect(event) {
    try {
      this.transaction = JSON.parse(JSON.stringify(event.data));
      this.sidebars.addExpense = true;
      //this.newTransaction = false;
      //this.transaction = JSON.parse(JSON.stringify(event.data));
      //console.log('onRowSelect - transaction', this.transaction);
      //this.displayDialog = true;
    }
    catch (ex) {
      console.error('onRowSelect - exception', ex);
    }
  }

  cloneTransaction(c: Transaction): Transaction {
    let transaction = new Transaction();
    for (let prop in c) {
      transaction[prop] = c[prop];
    }
    console.log('cloneTransaction', transaction);
    return transaction;
  }

  delete() {

  }

  save() {

  }

  tabChange(event) {
    this.selectedTab = event.index;
    console.log('tabChange', event, this.selectedTab);
  }
}
