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
  fromdate:Date;
  todate:Date;
  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Symbol', header: 'Symbol' },
      {field: 'Date', header: 'Purchase Date' },
      { field: 'volume', header: 'Quantity' },
      { field: 'close', header: 'Average Price' },
      { field: 'MarketPrice', header: 'Current Price' },
      { field: '', header: 'Profit' },
      { field: 'dividendamount', header: 'Dividend' }
    ];
    var d = new Date();
    d.setDate(d.getDate() -365);
    this.fromdate=d;
    this.todate=new Date();
    this.getStocks();
  }

  submit() {
    this.getStocks();
  }

  getStocks(): void {
    try {
      console.log('StocksComponent -- getStocks');
      this.stocksService.getStocks(this.fromdate, this.todate).subscribe(s => {
        this.stocks = s;
        console.log('StocksComponent -- getStocks', s);
      },
      error => {
        //console.log(error.json().error);
        console.error('StocksComponent -- getStocks', error);
        //return false;
      }
     );
    }
    catch (e) {
      console.log('getStocks exception:', e);
    }
  }

}
