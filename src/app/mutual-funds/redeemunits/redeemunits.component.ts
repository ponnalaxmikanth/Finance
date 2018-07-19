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
    funds: true,
    folios: true,
    fundtypes: true,
    fundcategory: true,
    fundoptions: true,
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
    for (let h = 0; h < this._mutualfundsService.myinvestedFunds.length; h++) {
      if (this._mutualfundsService.myinvestedFunds[h].FundHouse.FundHouseId == this.fundDetails.selectedHouse.code
        && this._mutualfundsService.myinvestedFunds[h].PortfolioId == this.selectedportFolio.code) {
        this.fundDetails.funds.push({ name: this._mutualfundsService.myinvestedFunds[h].FundName, code: this._mutualfundsService.myinvestedFunds[h].FundId });
      }
    }
    this.disableControls.funds = false;
  }

  onChangePortfolios() {
    this.disableControls.fundHouse = false;
    this.disableControls.funds = true;
    this.disableControls.folios = true;
    this.disableControls.fundtypes = true;
    this.disableControls.fundcategory = true;
    this.disableControls.fundoptions = true;
    console.log('onChangePortfolios', this.selectedportFolio);
  }

  onChangeFund() {
    this.disableControls.folios = false;
    this.disableControls.fundtypes = false;
    this.disableControls.fundcategory = false;
    this.disableControls.fundoptions = false;

    let myFunds = this._mutualfundsService.myFunds;
    let schemaCode = this.getSelectedFunsSchemaCode(this.fundDetails.selectedFund.code);
    for (let f = 0; f < myFunds.length; f++) {
      if (myFunds[f].SchemaCode == schemaCode) {

        this.fundDetails.selectedFundType = { name: myFunds[f].FundType.FundType, code: myFunds[f].FundType.FundTypeId };
        this.fundDetails.selectedFundCategory = { name: myFunds[f].FundCategory.FundClass, code: myFunds[f].FundCategory.FundClassId };
        this.fundDetails.selectedFundOptions = { name: myFunds[f].FundOptions.FundOption, code: myFunds[f].FundOptions.OptionId };
        return;
      }
    }
  }

  getSelectedFunsSchemaCode(fundId) {
    for (let f = 0; f < this._mutualfundsService.myinvestedFunds.length; f++) {
      if (this._mutualfundsService.myinvestedFunds[f].FundHouse.FundHouseId == this.fundDetails.selectedHouse.code
        && this._mutualfundsService.myinvestedFunds[f].PortfolioId == this.selectedportFolio.code
        && this._mutualfundsService.myinvestedFunds[f].FundId == fundId) {
        return this._mutualfundsService.myinvestedFunds[f].SchemaCode;
      }
    }
  }

  enableDisableSaveButton() {

  }

  SaveTransaction() {

  }

}
