import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MutualfundsService } from './services/mutualfunds/mutualfunds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _mutualfundsService: MutualfundsService) {

  }

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
        { label: 'Stocks', routerLink: ['/stocks'] }, //icon: 'fa-plus',
      {
        label: 'Mutual Funds', routerLink: ['/mfs'],
        items: [
          { label: 'Add', icon: 'fa-plus', command: (onclick) => { this.addMFTransaction() } },
          { label: 'Redeem', icon: 'fa-minus' },
          { label: 'Dividend', icon: 'fa-plus' },
        ]
      }, // icon: 'fa-edit',
        { label: 'Accounts', routerLink: ['/accounts'] },
        { label: 'Insurance', routerLink: ['/insurances'] }
    ];
  }

  addMFTransaction() {
    this._mutualfundsService.addMFTransactions.next(true);
  }

}


