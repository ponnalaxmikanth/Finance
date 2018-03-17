import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
        { label: 'Stocks'//icon: 'fa-plus',
        },
        {
            label: 'Mutual Funds'// icon: 'fa-edit',
        },
        { label: 'Accounts' },
        { label: 'Insurance' }
    ];
}

}


