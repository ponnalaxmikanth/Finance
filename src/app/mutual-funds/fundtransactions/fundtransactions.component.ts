import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fundtransactions',
  templateUrl: './fundtransactions.component.html',
  styleUrls: ['./fundtransactions.component.css']
})
export class FundtransactionsComponent implements OnInit, OnChanges {
  @Input() transactions: any;
  public cols: any[];
  public selectedTransaction: any;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'PurchaseDate', header: 'Purchase Date' },
      { field: 'Amount', header: 'Amount' },
      { field: 'CurrentValue', header: 'Current Value' },
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

}
