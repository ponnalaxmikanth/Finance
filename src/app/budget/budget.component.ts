import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import {HomeexpensesService} from '../services/homeexpenses/homeexpenses.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public getBudget : any;
  cols : any;

  constructor(private _homeExpensesService: HomeexpensesService ) { }

  ngOnInit() {
    this.cols = [
      { field: 'Fromdate', header: 'FromDate' },
      { field: 'Todate', header: 'ToDate' },
      { field: 'Items', header: 'ItemsList' },
      { field: 'Price', header: 'Amount' }
  ];
  this.getBudgetData();

  }

  getBudgetData() {
    try{
      this._homeExpensesService.getBudgetDetails()
      .subscribe((data: any) =>{
        console.log("BudgetComponent --getBudgetDetails",data);
        this.getBudget = data;
      });
    }
    catch(exc){
      console.log("BudgetComponent --getBudgetDetails",exc);
    }
  }

}
