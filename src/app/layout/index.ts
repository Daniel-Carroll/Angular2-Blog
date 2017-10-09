import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent} from './navbar/navbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {NavtabComponent} from './navtabs/navtabs.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {PackageListComponent} from './components/package-list/package-list.component';

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdListModule,
        MdTabsModule, MdIconModule, MdCardModule, MdGridListModule, MdProgressBarModule, MdMenuModule, MdTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations:[
        NavbarComponent, SidenavComponent, NavtabComponent, PackageListComponent, ProductCardComponent
    ],
    imports: [
        RouterModule, CommonModule, 
        MdButtonModule, MdCheckboxModule, MdToolbarModule, MdTabsModule, MdIconModule, MdCardModule, MdGridListModule, FlexLayoutModule, MdProgressBarModule,
        MdMenuModule, MdSidenavModule, MdListModule, MdTableModule, CdkTableModule
    ],
    exports: [
        NavbarComponent, SidenavComponent, NavtabComponent, PackageListComponent, ProductCardComponent,
        MdButtonModule, MdCheckboxModule, MdToolbarModule, MdTabsModule,MdIconModule, MdCardModule, MdGridListModule, FlexLayoutModule, 
        MdProgressBarModule, MdMenuModule, MdSidenavModule, MdListModule, MdTableModule, CdkTableModule
    ]
})
export class LayoutModule {}