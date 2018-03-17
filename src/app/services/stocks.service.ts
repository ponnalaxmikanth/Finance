import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() { }

  public getStocks() {
    return [
          { StockID: 'MSFT', Purchasedatetime: '03/01/2018', No_of_Stocks: 1,  Stockprice: 93.41 }
        , { StockID: 'MSFT', Purchasedatetime: '03/01/2018', No_of_Stocks: 1,  Stockprice: 93.41 }
        , { StockID: 'MSFT', Purchasedatetime: '03/01/2018', No_of_Stocks: 1,  Stockprice: 93.41 }
        ];
  }

}
