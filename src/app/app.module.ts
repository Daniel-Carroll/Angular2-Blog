import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'
import { requestOptionsProvider }   from './default-request-options.service';

import {LayoutModule} from './layout/index'
import {LoginComponent} from './login/login.component'
import {FastModule} from './fast/fast.module'
import {DashboardModule} from './dashboard/dashboard.module'
import {ToolsModule} from './tools/tools.module'

import { SidenavService } from './layout/sidenav/sidenav.service';

import {routes} from './app.routes'

import 'hammerjs';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FastModule,
    DashboardModule,
    ToolsModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    JsonpModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [requestOptionsProvider, SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
