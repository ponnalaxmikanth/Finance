import { Component, OnInit } from '@angular/core';

import { HomeexpensesService } from '../services/homeexpenses/homeexpenses.service';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {

  public sidebars: any = {
    addExpense: false,
    
  };

  constructor(public _homeExpensesService: HomeexpensesService) { }

  ngOnInit() {
    this._homeExpensesService.addTransaction.subscribe((val: boolean) => {
      this.sidebars.addExpense = val;
    });
  }

}
