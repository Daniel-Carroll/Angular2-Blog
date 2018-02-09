import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent} from './navbar/navbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {NavtabComponent} from './navtabs/navtabs.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {PackageListComponent} from './components/package-list/package-list.component';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule,
        MatTabsModule, MatIconModule, MatCardModule, MatGridListModule, MatProgressBarModule, MatMenuModule, MatTableModule, MatExpansionModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations:[
        NavbarComponent, SidenavComponent, NavtabComponent, PackageListComponent, ProductCardComponent
    ],
    imports: [
        RouterModule, CommonModule, 
        MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatIconModule, MatCardModule, MatGridListModule, FlexLayoutModule, MatProgressBarModule,
        MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatExpansionModule, CdkTableModule
    ],
    exports: [
        NavbarComponent, SidenavComponent, NavtabComponent, PackageListComponent, ProductCardComponent,
        MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule,MatIconModule, MatCardModule, MatGridListModule, FlexLayoutModule, 
        MatProgressBarModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatExpansionModule, CdkTableModule
    ]
})
export class LayoutModule {}