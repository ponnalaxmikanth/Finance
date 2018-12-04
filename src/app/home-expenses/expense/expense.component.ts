import { Component, OnInit } from '@angular/core';

import { HomeexpensesService } from '../../services/homeexpenses/homeexpenses.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  public selectedAccountType: any;
  public selectedAccount: any;
  public selectedGroup: any;
  public selectedSubGroup: any;
  public purchasedate: Date = new Date();
  public item: string;
  public filteredItems: any[];
  public filteredStores: any[];
  public amount: string;
  public strore: string;
  public transactby: any;
  public accounts: any;
  public saveDisabled: boolean = false;

  public owners: any = [
    { "Id": 1, "Name": "Kanth" },
    { "Id": 2, "Name": "Priya" }
  ];

  constructor(public _expensesService: HomeexpensesService) {
    this.accounts = JSON.parse(JSON.stringify(this._expensesService.acounts));
  }

  ngOnInit() {
  }

  onChangeAccountType(event) {
    try {
      //this.accounts = JSON.parse(JSON.stringify(this._expensesService.acounts));
      this.accounts = [];
      for (let i = 0; i < this._expensesService.acounts.length; i++) {
        let item = this._expensesService.acounts[i];
        if (item.AccountType.Id == this.selectedAccountType.Id) {
          this.accounts.push(item);
        }
        console.log('ExpenseComponent -- onChangeAccountType', this.selectedAccountType, this.accounts);
      }
    }
    catch (ex) {
      console.error('ExpenseComponent -- onChangeAccountType', ex);
    }
  }

  onChangeAccount(event) {
    try {
      console.log('ExpenseComponent -- onChangeAccount', this.selectedAccount);
    }
    catch (ex) {
      console.error('ExpenseComponent -- onChangeAccount', ex);
    }
  }

  onChangeGroup(event) {
    try {
      //this.selectedGroup = event.Id;
      console.log('ExpenseComponent -- onChangeGroup', this.selectedGroup, event);
    }
    catch (ex) {
      console.error('ExpenseComponent -- onChangeGroup', ex);
    }
  }

  onChangeSubGroup(event) {
    try {
      //this.selectedSubGroup = event.Id;
      console.log('ExpenseComponent -- onChangeSubGroup', this.selectedSubGroup, event);
    }
    catch (ex) {
      console.error('ExpenseComponent -- onChangeSubGroup', ex);
    }
  }

  onChangetransactedbt(event) {
    try {
      //this.transactby = event.Name;
      console.log('ExpenseComponent -- onChangetransactedbt', this.transactby, event);
    }
    catch (ex) {
      console.error('ExpenseComponent -- onChangetransactedbt', ex);
    }
  }

  filterItems(event) {
    try {
      let query = event.query;
      console.log('ExpenseComponent -- filterItems', event);
      let request = { item: query };
      this._expensesService.getItems(query).subscribe(items => {
        this.filteredItems = this.filterItem(query, items);
      });
    }
    catch (ex) {
      console.error('ExpenseComponent -- filterItems', ex);
    }
  }

  filterItem(query: string, items: any[]): any[] {
    try {
      let filtered: any[] = [];
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push({ name: item });
        }
      }
      console.log('ExpenseComponent -- filterItem', filtered);
      return filtered;
    }
    catch (ex) {
      console.error('ExpenseComponent -- filterItem', ex);
    }
  }


  getstores(event) {
    try {
      let query = event.query;
      console.log('ExpenseComponent -- getstores', event);
      let request = { item: query };
      this._expensesService.getStores(query).subscribe(stores => {
        this.filteredStores = this.filterStore(query, stores);
      });
    }
    catch (ex) {
      console.error('ExpenseComponent -- getstores', ex);
    }
  }

  filterStore(query: string, stores: any[]): any[] {
    try {
      let filtered: any[] = [];
      for (let i = 0; i < stores.length; i++) {
        let store = stores[i];
        if (store.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push({ name: store });
        }
      }
      console.log('ExpenseComponent -- filterStore', filtered);
      return filtered;
    }
    catch (ex) {
      console.error('ExpenseComponent -- filterStore', ex);
    }
  }

  addExpense() {
    try {
      console.log('ExpenseComponent -- addExpense');

      let request = {
        Date: this.purchasedate,
        GroupId: this.selectedGroup.Id,
        SubGroupId: this.selectedSubGroup.Id,
        Item: this.item,
        Amount: this.amount,
        AccountId: this.selectedAccount.Id,
        TransactedBy: this.transactby.Name,
        Store: this.strore
      };
      console.log('ExpenseComponent -- addExpense', request);

      this._expensesService.addExpense(request).subscribe(
        (val) => {
          console.log('ExpenseComponent -- addExpense', val); 
        });
    }
    catch (ex) {
      console.error('ExpenseComponent -- addExpense', ex);
    }
  }

}
