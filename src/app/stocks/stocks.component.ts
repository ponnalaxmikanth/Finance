import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Istocks } from '../../interface/stocks';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit {
  cols: any;
  stocks: Istocks[];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.cols = [
      { field: 'StocksId', header: 'Stock Code' },
      {field: 'PurchaseDate', header: 'Purchase Date' },
      { field: 'NumbersofStocks', header: 'Quantity' },
      { field: 'StocksPrice', header: 'Price' }
    ];

    this.getStocks();
  }

  getStocks(): void {
    try {
      this.stocksService.getStocks().subscribe(s => {
        this.stocks = s;
      });
    } catch (e) { console.log('getStocks exception:', e);
    }
  }

}
