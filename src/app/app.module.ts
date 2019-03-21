import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ToastrModule } from 'ngx-toastr';


//import { TreeTableModule } from '../../node_modules/primeng/components/treetable/treetable';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';


import { GrowlModule } from '../../node_modules/primeng/components/growl/growl';
import { TabViewModule } from '../../node_modules/primeng/components/tabview/tabview';
import { ContextMenuModule } from '../../node_modules/primeng/components/contextmenu/contextmenu';
import { CodeHighlighterModule } from '../../node_modules/primeng/components/codehighlighter/codehighlighter';

import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AccountsComponent } from './accounts/accounts.component';
import {BudgetComponent } from './budget/budget.component'

import { StocksService } from '../app/services/stocks.service';
import { HomeexpensesService} from '../app/services/homeexpenses/homeexpenses.service';
import { MutualfundsService } from '../app/services/mutualfunds/mutualfunds.service';
import { AddtransactionComponent } from './mutual-funds/addtransaction/addtransaction.component';
import { RedeemunitsComponent } from './mutual-funds/redeemunits/redeemunits.component';
import { AdddividendComponent } from './mutual-funds/adddividend/adddividend.component';
import { HomeExpensesComponent } from './home-expenses/home-expenses.component';
import { ExpenseComponent } from './home-expenses/expense/expense.component';

import { FundvalueComponent } from './mutual-funds/fundvalue/fundvalue.component';
import { FundtransactionsComponent } from './mutual-funds/fundtransactions/fundtransactions.component';


const appRoutes: Routes = [
  { path: 'stocks', component: StocksComponent },
  { path: 'mutualfunds', component: MutualFundsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'insurances', component: InsuranceComponent },
  { path: 'Expenses', component: HomeExpensesComponent },
  { path: 'budget', component:BudgetComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualFundsComponent,
    InsuranceComponent,
    AccountsComponent,
    AddtransactionComponent,
    RedeemunitsComponent,
    AdddividendComponent,
    HomeExpensesComponent,
    ExpenseComponent,
    FundvalueComponent,
    FundtransactionsComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule
    , NgbModule
    , HttpClientModule
    , TableModule
    , MenubarModule
    , RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
    , CalendarModule
    , BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule
    , TreeTableModule
    , GrowlModule
    , TabViewModule
    , ContextMenuModule
    , CodeHighlighterModule
    , SidebarModule
    , DropdownModule
    , CheckboxModule
    , InputTextModule
    , ButtonModule
    , BlockUIModule
    , ToastModule
    , DialogModule
    , MessageModule
    , CommonModule
    , AutoCompleteModule
    , ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
    , AccordionModule
    , RadioButtonModule
  ],
  providers: [StocksService, MutualfundsService, MessageService, HomeexpensesService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }
