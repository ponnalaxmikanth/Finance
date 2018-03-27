import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from '../services/stocks.service';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CalendarModule,
  ],
  declarations: [],
  providers: [ StocksService ]
})
export class StocksModule { }
