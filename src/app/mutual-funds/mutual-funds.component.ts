//our root app component
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeTableModule } from 'primeng/primeng';
import { TreeTable, TreeNode } from 'primeng/primeng';

import { AddtransactionComponent } from './addtransaction/addtransaction.component';

import { MutualfundsService } from '../services/mutualfunds/mutualfunds.service';



@Component({
  selector: 'app-mutual-funds',
  templateUrl: './mutual-funds.component.html',
  styleUrls: ['./mutual-funds.component.css']
})

export class MutualFundsComponent implements OnInit {

  public sidebars: any = { addTransaction: false, redeemUnits: false, addDividend: false };
  private selectedTab: number = 0;
  public fundTransactions: any;

  ngOnInit() {
    this._mutualfundsService.addMFTransactions.subscribe((val: boolean) => {
      this.sidebars.addTransaction = val;
    });

    this._mutualfundsService.redeenUnits.subscribe((val: boolean) => {
      this.sidebars.redeemUnits = val;
    });

    this._mutualfundsService.addDividend.subscribe((val: boolean) => {
      this.sidebars.addDividend = val;
    });

    this.getFundTransactions();
  }

  constructor(private _mutualfundsService: MutualfundsService) {
    //this.sidebars.addTransaction = false;

    this._mutualfundsService.getFundHouses().subscribe(val => {
      this._mutualfundsService.fundHouses = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFundHouses', error);
      }
    );

    this._mutualfundsService.getFundTypes().subscribe(val => {
      this._mutualfundsService.fundTypes = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFundTypes', error);
      }
    );

    this._mutualfundsService.getFundCategory().subscribe(val => {
      this._mutualfundsService.fundCategory = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFundCategory', error);
      }
    );

    this._mutualfundsService.getFundOptions().subscribe(val => {
      this._mutualfundsService.fundOptions = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFundOptions', error);
      }
    );

    this._mutualfundsService.getFunds().subscribe(val => {
      this._mutualfundsService.funds = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFunds', error);
      }
    );

    let request = { Type: "add", PortfolioId: -1 };
    this._mutualfundsService.getMyFunds(request).subscribe(val => {
      this._mutualfundsService.myFunds = val;
    },
      error => {
        console.error('MutualFundsComponent -- getMyFunds', error);
      }
    );

    request = { Type: "", PortfolioId: -1 };
    this._mutualfundsService.getMyFunds(request).subscribe(val => {
      this._mutualfundsService.myinvestedFunds = val;
    },
      error => {
        console.error('MutualFundsComponent -- getMyInvestedFunds', error);
      }
    );


    this._mutualfundsService.getFolios().subscribe(val => {
      this._mutualfundsService.folios = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFolios', error);
      }
    );

    this._mutualfundsService.getPortFolios().subscribe(val => {
      this._mutualfundsService.portfolios = val;
    },
      error => {
        console.error('MutualFundsComponent -- getPortFolios', error);
      }
    );
    
  }

  getFundTransactions() {
    let request = { "PortfolioId": "1", "FromDate": "01/01/2008", "ToDate": new Date(), "Type": "Invest" };
    this._mutualfundsService.getFundTransactions(request).subscribe(val => {
      console.log('MutualFundsComponent -- getFundTransactions', val);
      this.fundTransactions = val;
    },
      error => {
        console.error('MutualFundsComponent -- getFundHouses', error);
      }
    );
  }

  tabChange(event) {
    this.selectedTab = event.index;
    console.log('MutualFundsComponent -- tabChange', event, this.selectedTab);
  }

}
