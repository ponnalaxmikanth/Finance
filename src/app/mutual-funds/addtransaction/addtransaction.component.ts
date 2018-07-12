import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MutualfundsService } from '../../services/mutualfunds/mutualfunds.service';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})

export class AddtransactionComponent implements OnInit {

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
    growthSelectedFund: {},
  };
  public folios: any[];
  public selectedFolios: {};

  public portfolios: any[];
  public selectedportFolio: {};

  public purchasedate: Date = new Date();
  public IsSIP: boolean = false;
  public amount: number;
  public units: number;
  public nav: number;

  public disableControls : any = {
    fundHouse: true,
    folios: true,
    fundtypes: true,
    fundcategory: true,
    fundoptions: true,
    funds: true,
    growthFunds: true,
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
    this.fundDetails.funds = [];

    let funds = this._mutualfundsService.funds;
    this.fundDetails.funds = [];
    this.folios = [];

    for (let h = 0; h < funds.length; h++) {
      if (funds[h].FundHouseId == this.fundDetails.selectedHouse.code)
        this.fundDetails.funds.push({ name: funds[h].Name, code: funds[h].SchemaCode });
    }

    for (let h = 0; h < this._mutualfundsService.folios.length; h++) {
      if (this._mutualfundsService.folios[h].FundHouseId == this.fundDetails.selectedHouse.code
        && this._mutualfundsService.folios[h].PortfolioId == this.selectedportFolio.code)
        this.folios.push({ name: this._mutualfundsService.folios[h].FolioNumber, code: this._mutualfundsService.folios[h].FolioId });
    }
    this.disableControls.folios = false;
    this.disableControls.fundtypes = false;
    this.disableControls.fundcategory = false;
    this.disableControls.fundoptions = false;
    this.disableControls.funds = false;
    this.disableControls.growthFunds = false;

    console.log('fundHouseSelected', this.fundDetails.selectedHouse, this.fundDetails.funds, this.folios);
  }

  fundTypeSelected() {
    console.log('fundTypeSelected', this.fundDetails.selectedFundType);
  }

  fundTypeCategory() {
    console.log('fundTypeCategory', this.fundDetails.selectedFundCategory);
  }

  fundTypeOptions() {
    console.log('fundTypeOptions', this.fundDetails.selectedFundOptions);
  }

  onChangeFund() {
    console.log('on fund select', this.fundDetails.selectedFund);
    let myFunds = this._mutualfundsService.myFunds;
    for (let f = 0; f < myFunds .length; f++) {
      if (myFunds[f].SchemaCode == this.fundDetails.selectedFund.code) {
        
        this.fundDetails.selectedFundType = { name: myFunds[f].FundType.FundType, code: myFunds[f].FundType.FundTypeId };
        this.fundDetails.selectedFundCategory = { name: myFunds[f].FundCategory.FundClass, code: myFunds[f].FundCategory.FundClassId };
        this.fundDetails.selectedFundOptions = { name: myFunds[f].FundOptions.FundOption, code: myFunds[f].FundOptions.OptionId };
        this.fundDetails.growthSelectedFund = { name: myFunds[f].GrowthFundName, code: myFunds[f].GrowthSchemaCode };
        return;
      }
    }
    this.fundDetails.selectedFundType = {};
    this.fundDetails.selectedFundCategory = {};
    this.fundDetails.selectedFundOptions = {};
    this.fundDetails.growthSelectedFund = {};
  }

  onChangePortfolios() {
    this.disableControls.fundHouse = false;
    console.log('onChangePortfolios', this.selectedportFolio);
  }

  SaveTransaction() {
    let request = {
      PortfolioId: this.selectedportFolio.code,
      FundHouseId: this.fundDetails.selectedHouse.code,
      FundTypeId: this.fundDetails.selectedFundType.code,
      FundCategoryId: this.fundDetails.selectedFundCategory.code,
      FundOptionsId: this.fundDetails.selectedFundOptions.code,
      SchemaCode: this.fundDetails.selectedFund.code,
      FundName: this.fundDetails.selectedFund.name,
      GrowthSchemaCode: this.fundDetails.growthSelectedFund.code,
      FolioId: this.selectedFolios.code,
      PurchaseDate: this.purchasedate,
      Amount: this.amount,
      PurchaseNAV: this.nav,
      Units: this.units,
      IsSIP: this.IsSIP,
    };

    this._mutualfundsService.addPurchase(request).subscribe(s => {
      console.error('MutualFundsComponent -- addMFTransactions', s);
    },
      error => {
        console.error('MutualFundsComponent -- addMFTransactions', error);
      }
    );
  }

}
