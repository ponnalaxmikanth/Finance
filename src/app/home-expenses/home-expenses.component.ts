import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { HomeexpensesService } from '../services/homeexpenses/homeexpenses.service';
import { AccountDetails, AccountType, Transaction, Hometransactions, ExpenseGroup, ExpenseSubGroup } from '../models/hometransactions';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.scss']
})
export class HomeExpensesComponent implements OnInit, AfterViewInit {

  public sidebars: any = { addExpense: false };
  public fromDate: Date = new Date();
  public toDate: Date = new Date();
  //public transactions: Hometransactions[];
  public transactions;
  public newTransaction: boolean = false;
  public selectedTransaction: Transaction;
  public cols: any[];
  public displayDialog: boolean = false;
  //public selectedTab: number = 0;

  public accountTypes;
  public selectedAccountType: AccountType;

  public accounts: AccountDetails[] = new Array();
  public allAccounts: AccountDetails[] = new Array();
  public selectedAccount: AccountDetails;

  public transaction: Transaction = new Transaction();
  public disableRefresh: boolean = true;
  //public accountDetails: AccountDetails;

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
    //this.getTransactions(1);

    //
    this._homeExpensesService.getAccountDetails().subscribe(data => {
      this.accounts = [];
      //for (var i = 1; i < data.length; i++) {
      //  this.accounts.push({ name: data[i].DisplayName, code: data[i].Id });
      //}
      for (let h = 0; h < data.length; h++) {
        //this.accounts = data as AccountDetails[];
        this.allAccounts = data as AccountDetails[];
        //this.accounts.push({ DisplayName: data[h].DisplayName, Id: data[h].Id });
      }
      console.log('HomeExpensesComponent -- getAccountDetails', this.accounts);
    },
    error => {
      console.error('HomeExpensesComponent -- getAccountDetails', error);
      });

    this.accountTypes = [];
    this._homeExpensesService.getAccountTypes().subscribe(
      data => {
        this.accountTypes = data as AccountType[];
        console.log('HomeExpensesComponent -- getAccountTypes', this.accountTypes);
      },
      error => { console.error('HomeExpensesComponent -- getAccountTypes', error); }
    );
   // this.accounts = [{ name: "BofA-Checking", code: 1 }, { name: "DCU-Checking", code: 10 }];
    console.log('HomeExpensesComponent -- constructor', this.accounts);
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
  }

  ngAfterViewInit() {
    try {
      //this.accounts = [];
      //this._homeExpensesService.getAccountDetails().subscribe(data => {
      //  for (var i = 1; i < data.length; i++) {
      //    this.accounts.push({ name: data[i].DisplayName, code: data[i].Id });
      //  }
      //  console.log('HomeExpensesComponent -- getAccountDetails', this.accounts);
      //},
      //error => {
      //  console.error('HomeExpensesComponent -- getAccountDetails', error);
      //});
    }
    catch (ex) {
      console.error('HomeExpensesComponent -- ngAfterViewInit', ex);
    }
  }

  getTransactions() {

    //var accountId = this._homeExpensesService.acounts[index].Id;
    console.log('HomeExpensesComponent -- getTransactions', this.selectedAccount);
    this.transactions = [];
    this._homeExpensesService.getTransactions(this.fromDate, this.toDate, this.selectedAccount.Id).subscribe((val: any) => {
      console.log('HomeExpensesComponent -- getTransactions', this.fromDate, this.toDate, val);
      if (val.length > 0) {
        this.transactions = val[0].Transactions;
      }
      else {
        this.transactions = [];
      }
    });
  }

  showDialogToAdd() {
    try {
      this.transaction = new Transaction();
      this.transaction.Id = -1;
      this.transaction.Date = new Date();
      this.transaction.ExpenseGroup = new ExpenseGroup();
      this.transaction.ExpenseSubGroup = new ExpenseSubGroup();
      this.transaction.Item = "";
      this.transaction.Amount = 0;
      this.transaction.Store = "";
      this.transaction.TransactedBy = "Kanth";
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

  //cloneTransaction(c: Transaction): Transaction {
  //  let transaction = new Transaction();
  //  for (let prop in c) {
  //    transaction[prop] = c[prop];
  //  }
  //  console.log('cloneTransaction', transaction);
  //  return transaction;
  //}

  //delete() {

  //}

  //save() {

  //}

  accountTypeSelected() {
    try {
      this.accounts = [];
      this.selectedAccount = null;
      if (this.selectedAccountType != undefined && this.selectedAccountType != null) {
        this.allAccounts.forEach(ele => {
          if (ele.AccountType.Id === this.selectedAccountType.Id) {
            this.accounts.push(ele);
          }
        });
      }
      this.enableDisableRefresh();
      console.log('showDialogToAdd - accountTypeSelected', this.selectedAccountType, this.accounts, this.allAccounts);
    }
    catch (ex) { console.error('showDialogToAdd - accountTypeSelected', ex); }
  }

  //accountSelected() {
  //  try {

  //  }
  //  catch (ex) { console.error('showDialogToAdd - accountSelected', ex); }
  //}

  enableDisableRefresh() {
    try {
      console.log('showDialogToAdd - enableDisableRefresh', this.selectedAccountType, this.selectedAccount);
      this.transactions = null;
      if (this.selectedAccountType == undefined || this.selectedAccountType == null|| this.selectedAccount == undefined || this.selectedAccount == null)
        this.disableRefresh = true;
      else
        this.disableRefresh = false;
    }
    catch (ex) { console.error('showDialogToAdd - enableDisableRefresh', ex); }
  }

  //tabChange(event) {
  //  this.selectedTab = event.index;
  //  console.log('tabChange', event, this.selectedTab);

  //  this.getTransactions(event.index);
  //}
}
