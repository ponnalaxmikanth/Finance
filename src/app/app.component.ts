import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

import { ToastrService } from 'ngx-toastr';
//import { Excel } from 'office-js';
//import * as OfficeHelpers from '@microsoft/office-js-helpers';


import { MutualfundsService } from './services/mutualfunds/mutualfunds.service';
import { HomeexpensesService } from './services/homeexpenses/homeexpenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  welcomeMessage = 'Welcome';

  constructor(private _mutualfundsService: MutualfundsService
    , private _homeExpensesService: HomeexpensesService, private toastr: ToastrService) {

  }

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { label: 'Stocks', routerLink: ['/stocks']
      , items: [ {label: 'Track Stocks', routerLink: ['/stocks'] }]
      },
      {
        label: 'Mutual Funds', routerLink: ['/mutualfunds'],
        items: [
          { label: 'Add', icon: 'fa fa-plus', command: (onclick) => { this._mutualfundsService.addMFTransactions.next(true); } },
          { label: 'Redeem', icon: 'fa fa-minus', command: (onclick) => { this._mutualfundsService.redeenUnits.next(true); } },
          { label: 'Dividend', icon: 'fa fa-plus', command: (onclick) => { this._mutualfundsService.addDividend.next(true); } },
        ]
      },
      { label: 'Accounts', routerLink: ['/accounts'] },
      {
        label: 'Home', routerLink: ['/Expenses'],
        //items: [
        //  { label: 'Add', icon: 'fa-plus', command: (onclick) => { this._homeExpensesService.addTransaction.next(true); } },
        //]
      },
      { label: 'Budget', routerLink: ['/budget'], },
      { label: 'Expense Tracker', routerLink: ['/trackexpenses']
      , items: [ {label: 'Track Expenses', routerLink: ['/trackexpenses'] }]
      }
    ];
  }

  showSuccess() {
    //this.toastr.success('Hello world!', 'Toastr fun!');
    var ActiveToast  = this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 10000, progressBar: true, extendedTimeOut: 5000
      , easing : 'ease-in'
      , easeTime: 1000
    });

    ActiveToast.onShown.subscribe( event => { console.log('onShown', event); } );
    ActiveToast.onHidden.subscribe( event => { console.log('onHidden', event); });
    ActiveToast.onTap.subscribe( event => { console.log('onTap', event); } );
    ActiveToast.onAction.subscribe( event => { console.log('onAction', event); });

    console.log('showSuccess', ActiveToast);
  }

  async setColor() {
    // try {
    //     await Excel.run(async context => {
    //         const range = context.workbook.getSelectedRange();
    //         range.load('address');
    //         range.format.fill.color = 'green';
    //         await context.sync();
    //         console.log(`The range address was ${range.address}.`);
    //     });
    // } catch (error) {
    //     OfficeHelpers.UI.notify(error);
    //     OfficeHelpers.Utilities.log(error);
    // }
}

}


