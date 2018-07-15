import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MutualfundsService } from '../../services/mutualfunds/mutualfunds.service';

@Component({
  selector: 'app-redeemunits',
  templateUrl: './redeemunits.component.html',
  styleUrls: ['./redeemunits.component.css']
})
export class RedeemunitsComponent implements OnInit {

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

  public folios: any[];
  public selectedFolios: any;

  public portfolios: any[];
  public selectedportFolio: any;

  public disableControls: any = {
    fundHouse: true,
    folios: true,
    fundtypes: true,
    fundcategory: true,
    fundoptions: true,
    funds: true,
    saveButton: true,
  }

  constructor(private _mutualfundsService: MutualfundsService) {
    this.portfolios = [];
    for (let h = 0; h < this._mutualfundsService.portfolios.length; h++) {
      this.portfolios.push({ name: this._mutualfundsService.portfolios[h].PortfolioName, code: this._mutualfundsService.portfolios[h].PortfolioId });
    }

    let houses = this._mutualfundsService.fundHouses;
    this.fundDetails.fundHouses = [];
    for (let h = 0; h < houses.length; h++) {
      this.fundDetails.fundHouses.push({ name: houses[h].FundHouseName, code: houses[h].FundHouseId });
    }

    let types = this._mutualfundsService.fundTypes;
    this.fundDetails.fundTypes = [];
    for (let h = 0; h < types.length; h++) {
      this.fundDetails.fundTypes.push({ name: types[h].FundType, code: types[h].FundTypeId });
    }

    let category = this._mutualfundsService.fundCategory;
    this.fundDetails.fundCategory = [];
    for (let h = 0; h < category.length; h++) {
      this.fundDetails.fundCategory.push({ name: category[h].FundClass, code: category[h].FundClassId });
    }

    let options = this._mutualfundsService.fundOptions;
    this.fundDetails.fundOptions = [];
    for (let h = 0; h < options.length; h++) {
      this.fundDetails.fundOptions.push({ name: options[h].FundOption, code: options[h].OptionId });
    }
  }

  ngOnInit() {

  }

  fundHouseSelected() {
    this.folios = [];
    for (let h = 0; h < this._mutualfundsService.folios.length; h++) {
      if (this._mutualfundsService.folios[h].FundHouseId == this.fundDetails.selectedHouse.code
        && this._mutualfundsService.folios[h].PortfolioId == this.selectedportFolio.code) {
        this.folios.push({ name: this._mutualfundsService.folios[h].FolioNumber, code: this._mutualfundsService.folios[h].FolioId });

        if (this._mutualfundsService.folios[h].isDefaultFolio) {
          this.selectedFolios = { name: this._mutualfundsService.folios[h].FolioNumber, code: this._mutualfundsService.folios[h].FolioId };
        }
      }
    }

    this.fundDetails.funds = [];
    let request = { Type: "", PortfolioId: this.selectedportFolio.code };
    this._mutualfundsService.getMyFunds(request).subscribe(val => {

      for (let f = 0; f < val.length; f++) {
        if (this.fundDetails.selectedHouse.code == val[f].FundHouse.FundHouseId)
          //this.fundDetails.funds.push({ name: val[f].FundName, code: val[f].FundId });
          this.fundDetails.funds.push({ name: val[f].FundHouse.FundHouseId, code: val[f].FundHouse.FundHouseName });
      }

      this.disableControls.folios = false;
      this.disableControls.fundtypes = false;
      this.disableControls.fundcategory = false;
      this.disableControls.fundoptions = false;
      this.disableControls.funds = false;
      console.log('RedeemunitsComponent -- fundHouseSelected', val, this.fundDetails.funds);
    },
      error => {
        console.error('RedeemunitsComponent -- fundHouseSelected', error);
      }
    );
    //console.log('fundHouseSelected', this.fundDetails.selectedHouse, this.fundDetails.funds, this.folios);
  }

  onChangePortfolios() {
    this.disableControls.fundHouse = false;
    console.log('onChangePortfolios', this.selectedportFolio);
  }

  onChangeFund() {

  }

}
