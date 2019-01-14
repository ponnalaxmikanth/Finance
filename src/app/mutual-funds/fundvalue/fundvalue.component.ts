import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fundvalue',
  templateUrl: './fundvalue.component.html',
  styleUrls: ['./fundvalue.component.css']
})
export class FundvalueComponent implements OnInit, OnChanges {
  @Input() fundValue: any;

  constructor() { }

  ngOnInit() {
    //console.log('FundvalueComponent -- ngOnInit', this.fundValue);
  }

  ngOnChanges() {

  }

  showDialogToAdd(fund) {
    console.log('FundvalueComponent -- showDialogToAdd', fund);
  }

}
