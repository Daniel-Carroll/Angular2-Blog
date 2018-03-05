import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {RouterModule} from '@angular/router';
import { requestOptionsProvider }   from './default-request-options.service';
import { environment } from '../environments/environment';

import {LayoutModule} from './layout/index'
import {HomeModule} from './home/home.module'
import {BlogModule} from './blog/blog.module'

import {routes} from './app.routes'

import 'hammerjs';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HomeModule,
    BlogModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    JsonpModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
