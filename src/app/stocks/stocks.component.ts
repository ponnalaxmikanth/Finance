import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  cols : any;
  stocks : any;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'StockID', header: 'Stock Code' },
      {field: 'Purchasedatetime', header: 'Purchase Date' },
      { field: 'No_of_Stocks', header: 'Quantity' },
      { field: 'Stockprice', header: 'Price' }
    ];

    this.stocks = 
      [
        { StockID: "MSFT", Purchasedatetime: "03/01/2018", No_of_Stocks: 1,  Stockprice: 93.41 }
      , { StockID: "MSFT", Purchasedatetime: "03/01/2018", No_of_Stocks: 1,  Stockprice: 93.41 }
      , { StockID: "MSFT", Purchasedatetime: "03/01/2018", No_of_Stocks: 1,  Stockprice: 93.41 }
      ]
    
  }

}
