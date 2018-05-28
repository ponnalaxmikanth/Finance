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

  private addTransaction: boolean = false;

  private fundHouses: any;
  private fundTypes: any;
  private fundCategory: any;
  private fundOptions: any;

  ngOnInit() {
    console.log('MutualFundsComponent -- ngOnInit');
    this._mutualfundsService.addMFTransactions.subscribe((val: boolean) => {
      this.addTransaction = true;
    });
  }

  constructor(private _mutualfundsService: MutualfundsService) {
    this.addTransaction = false;

    this._mutualfundsService.getFundHouses().subscribe(s => {
      this.fundHouses = s;
      console.log('MutualFundsComponent -- getFundHouses', this.fundHouses );
    },
      error => {
        console.error('MutualFundsComponent -- getFundHouses', error);
      }
    );

    this._mutualfundsService.getFundTypes().subscribe(s => {
      this.fundTypes = s;
      console.log('MutualFundsComponent -- getFundTypes', this.fundTypes);
    },
      error => {
        console.error('MutualFundsComponent -- getFundTypes', error);
      }
    );

    this._mutualfundsService.getFundCategory().subscribe(s => {
      this.fundCategory = s;
      console.log('MutualFundsComponent -- getFundCategory', this.fundCategory);
    },
      error => {
        console.error('MutualFundsComponent -- getFundCategory', error);
      }
    );

    this._mutualfundsService.getFundOptions().subscribe(s => {
      this.fundOptions = s;
      console.log('MutualFundsComponent -- getFundOptions', this.fundOptions);
    },
      error => {
        console.error('MutualFundsComponent -- getFundOptions', error);
      }
    );
    
  }

}
