import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'
import { requestOptionsProvider }   from './default-request-options.service';

import {LayoutModule} from './layout/index'
import {HomeModule} from './home/home.module'
import {FastModule} from './fast/fast.module'
import {DashboardModule} from './dashboard/dashboard.module'
import {MaterialModule} from '@angular/material';

import { SidenavService } from './layout/sidenav/sidenav.service';

import {routes} from './app.routes'

import 'hammerjs';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    FastModule,
    DashboardModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    JsonpModule
  ],
  providers: [requestOptionsProvider, SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
