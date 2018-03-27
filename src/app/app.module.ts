import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StocksService } from '../app/services/stocks.service';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ,ReactiveFormsModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
