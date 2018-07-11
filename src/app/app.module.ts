import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';

import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { TreeTableModule } from '../../node_modules/primeng/components/treetable/treetable';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';

import { GrowlModule } from '../../node_modules/primeng/components/growl/growl';
import { TabViewModule } from '../../node_modules/primeng/components/tabview/tabview';
import { ContextMenuModule } from '../../node_modules/primeng/components/contextmenu/contextmenu';
import { CodeHighlighterModule } from '../../node_modules/primeng/components/codehighlighter/codehighlighter';
//import { AddtransactionComponent } from './addtransaction/addtransaction.component';

import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddtransactionComponent } from './mutual-funds/addtransaction/addtransaction.component';

import { StocksService } from '../app/services/stocks.service';
import { MutualfundsService } from '../app/services/mutualfunds/mutualfunds.service';



const appRoutes: Routes = [
  { path: 'stocks', component: StocksComponent },
  { path: 'mfs', component: MutualFundsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'insurances', component: InsuranceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualFundsComponent,
    InsuranceComponent,
    AccountsComponent,
    AddtransactionComponent,
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , TableModule
    , MenubarModule
    , RouterModule.forRoot(appRoutes,{ enableTracing: true })
    ,CalendarModule
    ,BrowserAnimationsModule
    ,FormsModule
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
  ],
  providers: [StocksService, MutualfundsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
