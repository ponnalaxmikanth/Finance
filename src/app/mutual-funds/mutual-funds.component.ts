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

  public sidebars: any = {
    addTransaction: false,
    redeemUnits: false,
    addDividend: false
  };

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
  }

  constructor(private _mutualfundsService: MutualfundsService) {
    //this.sidebars.addTransaction = false;

    this._mutualfundsService.getFundHouses().subscribe(s => {
      this._mutualfundsService.fundHouses = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFundHouses', error);
      }
    );

    this._mutualfundsService.getFundTypes().subscribe(s => {
      this._mutualfundsService.fundTypes = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFundTypes', error);
      }
    );

    this._mutualfundsService.getFundCategory().subscribe(s => {
      this._mutualfundsService.fundCategory = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFundCategory', error);
      }
    );

    this._mutualfundsService.getFundOptions().subscribe(s => {
      this._mutualfundsService.fundOptions = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFundOptions', error);
      }
    );

    this._mutualfundsService.getFunds().subscribe(s => {
      this._mutualfundsService.funds = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFunds', error);
      }
    );

    let request = { Type: "add", PortfolioId: -1 };
    this._mutualfundsService.getMyFunds(request).subscribe(s => {
      this._mutualfundsService.myFunds = s;
    },
      error => {
        console.error('MutualFundsComponent -- getMyFunds', error);
      }
    );

    this._mutualfundsService.getFolios().subscribe(s => {
      this._mutualfundsService.folios = s;
    },
      error => {
        console.error('MutualFundsComponent -- getFolios', error);
      }
    );

    this._mutualfundsService.getPortFolios().subscribe(s => {
      this._mutualfundsService.portfolios = s;
    },
      error => {
        console.error('MutualFundsComponent -- getPortFolios', error);
      }
    );
    
  }

}
