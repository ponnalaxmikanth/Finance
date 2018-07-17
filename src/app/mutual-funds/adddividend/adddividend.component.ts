import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MutualfundsService } from '../../services/mutualfunds/mutualfunds.service';

@Component({
  selector: 'app-adddividend',
  templateUrl: './adddividend.component.html',
  styleUrls: ['./adddividend.component.css']
})
export class AdddividendComponent implements OnInit {

  public fundDetails: any = {
    fundHouses: [],
    selectedHouse: {},

    fundTypes: [],
    selectedFundType: {},

    fundCategory: [],
    selectedFundCategory: {},

    fundOptions: [],
    selectedFundOptions: {},

    funds: [],
    selectedFund: {},
  };

  public disableControls: any = {
    fundHouse: true,
    folios: true,
  };

  public portfolios: any[];
  public selectedportFolio: any;

  constructor(private _mutualfundsService: MutualfundsService) {
    this.portfolios = [];
    for (let p = 0; p < this._mutualfundsService.portfolios.length; p++) {
      this.portfolios.push({ name: this._mutualfundsService.portfolios[p].PortfolioName, code: this._mutualfundsService.portfolios[p].PortfolioId });
    }

    let houses = this._mutualfundsService.fundHouses;
    this.fundDetails.fundHouses = [];
    for (let h = 0; h < houses.length; h++) {
      this.fundDetails.fundHouses.push({ name: houses[h].FundHouseName, code: houses[h].FundHouseId });
    }
  }

  ngOnInit() {
  }

  onChangePortfolios() {
    this.disableControls.fundHouse = false;
  }

  fundHouseSelected() {
    this.fundDetails.funds = [];

    let funds = this._mutualfundsService.funds;
    this.fundDetails.funds = [];
    
    console.log('AdddividendComponent -- fundHouseSelected', this.fundDetails.funds);
  }

  onChangeFund() {
    let funds = this._mutualfundsService.funds;
    this.fundDetails.funds = [];
    for (let h = 0; h < funds.length; h++) {
      if (funds[h].FundHouseId == this.fundDetails.selectedHouse.code)
        this.fundDetails.funds.push({ name: funds[h].Name, code: funds[h].SchemaCode });
    }

    let myFunds = this._mutualfundsService.myFunds;
    for (let f = 0; f < myFunds.length; f++) {
      if (myFunds[f].SchemaCode == this.fundDetails.selectedFund.code) {

        this.fundDetails.selectedFundType = { name: myFunds[f].FundType.FundType, code: myFunds[f].FundType.FundTypeId };
        this.fundDetails.selectedFundCategory = { name: myFunds[f].FundCategory.FundClass, code: myFunds[f].FundCategory.FundClassId };
        this.fundDetails.selectedFundOptions = { name: myFunds[f].FundOptions.FundOption, code: myFunds[f].FundOptions.OptionId };
        return;
      }
    }
  }

}
