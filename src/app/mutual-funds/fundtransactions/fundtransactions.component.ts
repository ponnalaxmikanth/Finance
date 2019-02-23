import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fundtransactions',
  templateUrl: './fundtransactions.component.html',
  styleUrls: ['./fundtransactions.component.scss']
})
export class FundtransactionsComponent implements OnInit, OnChanges {
  @Input() transactions: any;
  public cols: any[];
  public selectedTransaction: any;
  public sipChecked: boolean = true;
  public sipUnChecked: boolean = false;
  public checked: boolean = true;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'PurchaseDate', header: 'Purchase Date' },
      { field: 'Amount', header: 'Amount' },
      { field: 'CurrentValue', header: 'Current Value' },
      { field: 'Profit', header: 'Profit' },
      { field: 'ProfitPer', header: 'Profit (%)' },
      { field: 'AgePer', header: 'Age (%)' },
      { field: 'Units', header: 'Units' },
      { field: 'DividendPerNAV', header: 'Dividend/NAV' },
      { field: 'Dividend', header: 'Dividend' },
      { field: 'ISSIP', header: 'SIP' },
    ];
  }

  ngOnChanges() {

  }

  showDialogToAdd() {

  }

  onRowSelect() {}
}
