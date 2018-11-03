import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MutualfundsService } from '../../services/mutualfunds/mutualfunds.service';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

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
  public selectedFolios: any;

  public portfolios: any[];
  public selectedportFolio: any;

  public purchasedate: Date = new Date();
  public IsSIP: boolean = false;
  public amount: number = 5000;
  public units: number;
  public nav: number;
  public maxDate: Date = new Date();
  public disabled: boolean = true;

  public disableControls: any = {
    fundHouse: true,
    folios: true,
    fundtypes: true,
    fundcategory: true,
    fundoptions: true,
    funds: true,
    growthFunds: true,
    saveButton: true,
  }
  public blockedPanel: boolean = false;
  public blockedDocument: boolean = false;

  constructor(private _mutualfundsService: MutualfundsService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.populateSelections();
  }

  populateSelections(): any {
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
        && this._mutualfundsService.folios[h].PortfolioId == this.selectedportFolio.code) {
        this.folios.push({ name: this._mutualfundsService.folios[h].FolioNumber, code: this._mutualfundsService.folios[h].FolioId });

        if (this._mutualfundsService.folios[h].isDefaultFolio) {
          this.selectedFolios = { name: this._mutualfundsService.folios[h].FolioNumber, code: this._mutualfundsService.folios[h].FolioId };
        }
      }
    }
    this.disableControls.folios = false;
    this.disableControls.fundtypes = false;
    this.disableControls.fundcategory = false;
    this.disableControls.fundoptions = false;
    this.disableControls.funds = false;
    this.disableControls.growthFunds = false;

    console.log('fundHouseSelected', this.fundDetails.selectedHouse, this.fundDetails.funds, this.folios);
    this.enableDisableSaveButton();
  }

  fundTypeSelected() {
    console.log('fundTypeSelected', this.fundDetails.selectedFundType);
  }

  fundTypeCategory() {
    console.log('fundTypeCategory', this.fundDetails.selectedFundCategory);
    this.enableDisableSaveButton();
  }

  fundTypeOptions() {
    console.log('fundTypeOptions', this.fundDetails.selectedFundOptions);
    this.enableDisableSaveButton();
  }

  onChangeFund() {
    console.log('on fund select', this.fundDetails.selectedFund);
    this.getFundNav();
    let myFunds = this._mutualfundsService.myFunds;
    for (let f = 0; f < myFunds.length; f++) {
      if (myFunds[f].SchemaCode == this.fundDetails.selectedFund.code) {

        this.fundDetails.selectedFundType = { name: myFunds[f].FundType.FundType, code: myFunds[f].FundType.FundTypeId };
        this.fundDetails.selectedFundCategory = { name: myFunds[f].FundCategory.FundClass, code: myFunds[f].FundCategory.FundClassId };
        this.fundDetails.selectedFundOptions = { name: myFunds[f].FundOptions.FundOption, code: myFunds[f].FundOptions.OptionId };
        this.fundDetails.growthSelectedFund = { name: myFunds[f].GrowthFundName, code: myFunds[f].GrowthSchemaCode };
        this.enableDisableSaveButton();
        return;
      }
    }
    this.fundDetails.selectedFundType = {};
    this.fundDetails.selectedFundCategory = {};
    this.fundDetails.selectedFundOptions = {};
    this.fundDetails.growthSelectedFund = {};
  }

  getFundNav() {
    this.purchasedate.setHours(0, 0, 0, 0);
    let request = { SchemaCode: this.fundDetails.selectedFund.code, Date: this.purchasedate };
    console.log('AddtransactionComponent -- getFundNav', request);
    this._mutualfundsService.getFundNav(request).subscribe((val: number) => {
      if (val == -9999999) {
        this.nav = 0;
      }
      else {
        this.nav = val;
        this.units = parseFloat((this.amount / val).toFixed(4));
      }
    });
  }

  onChangePortfolios() {
    this.disableControls.fundHouse = false;
    console.log('AddtransactionComponent -- onChangePortfolios', this.selectedportFolio);
    this.enableDisableSaveButton();
  }

  enableDisableSaveButton() {
    if (this.selectedportFolio != undefined
      && this.fundDetails.selectedHouse != undefined
      && this.fundDetails.selectedFund != undefined
      && this.fundDetails.growthSelectedFund != undefined
      && this.selectedFolios != undefined
      && this.fundDetails.selectedFundType != undefined
      && this.fundDetails.selectedFundCategory != undefined
      && this.fundDetails.selectedFundOptions != undefined
    )
      this.disabled = false;
    else
      this.disabled = true;
  }

  SaveTransaction() {
    this.disabled = true;
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
    this.blockedDocument = true;
    this._mutualfundsService.addPurchase(request).subscribe(result => {
      console.log('MutualFundsComponent -- addMFTransactions result', result);
      //this.disabled = false;
      //this.blockedDocument = false;

      if (result != undefined && result != null && (result.ReturnCode == 0 || result.ReturnCode == "0")) {
        this.messageService.add({ key: 'tl', severity: 'success', summary: 'Success', detail: 'Saved successfully!' });
      }
      else {
        this.messageService.add({ key: 'tl', severity: 'error', summary: 'Failed', detail: 'Failed to Save!' });
      }
      this.clearValues();
    },
      error => {
        console.error('MutualFundsComponent -- addMFTransactions error', error);
        this.messageService.add({ key: 'tl', severity: 'error', summary: 'Failed', detail: 'Failed to Save!' });
        this.clearValues();
        //this.disabled = false;
        //this.blockedDocument = false;
      }
    );
  }

  clearValues() {
    this.fundDetails.selectedHouse = {};
    this.fundDetails.selectedFundType = {};
    this.fundDetails.selectedFundCategory = {};
    this.fundDetails.selectedFundOptions = {};
    this.fundDetails.selectedFund = {};
    this.fundDetails.growthSelectedFund = {};
    this.selectedFolios = {};
    this.units = 0;
    this.nav = 0;
  }

  blockDocument() {
    this.blockedDocument = true;
    //setTimeout(() => {
    //  this.blockedDocument = false;
    //}, 3000);
  }

}
