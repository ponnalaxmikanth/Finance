import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from '../services/stocks.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [ StocksService ]
})
export class StocksModule { }
