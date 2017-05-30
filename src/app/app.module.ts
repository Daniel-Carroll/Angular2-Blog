import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'
import { requestOptionsProvider }   from './default-request-options.service';

import {LayoutModule} from './layout/index'
import {HomeModule} from './home/home.module'
import {BlogModule} from './blog/blog.module'

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
    BlogModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    JsonpModule
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
