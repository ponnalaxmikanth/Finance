import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { HomeexpensesService } from '../services/homeexpenses/homeexpenses.service';


@Component({
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrls: ['./expensetracker.component.scss']
})
export class ExpensetrackerComponent implements OnInit {

  public fromDate: Date = new Date();
  public toDate: Date = new Date();
  public cols: any[];
  public transactions;

  constructor(calendar: NgbCalendar, public _homeExpensesService: HomeexpensesService) {
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  ngOnInit() {
    this.cols = [
      { field: 'Group', header: 'Group', class: 'text' },
      { field: 'SubGroup', header: 'Sub Group', class: 'text' },
      { field: 'Debit', header: 'Debit', class: 'money' },
      { field: 'Credit', header: 'Credit', class: 'money' },
      { field: 'BudgetAmount', header: 'Budget', class: 'money' },
      { field: 'Balance', header: 'Balance', class: 'money' }
    ];
    this.getTransactions();
  }

  fromDateChanged() {
    if (this.toDate < this.fromDate) {
      this.toDate = this.fromDate;
    }
  }

  toDateChanged() {
    if (this.toDate < this.fromDate) {
      this.fromDate = this.toDate;
    }
  }

  getTransactions() {
    this._homeExpensesService.getExpenseTransactions(this.fromDate, this.toDate)
    .subscribe(data => { 
      console.log('response:' + data);
      this.transactions = data;
    },
    error => {
      console.error('ExpensetrackerComponent -- getTransactions', error);
      }
      );
  }

}
