import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent} from './navbar/navbar.component';

import {MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule,
        MatTabsModule, MatIconModule, MatCardModule, MatGridListModule, MatProgressBarModule, MatMenuModule, MatTableModule, MatExpansionModule, MatFormFieldModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports: [
        RouterModule, CommonModule, 
        MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatIconModule, MatCardModule, MatGridListModule, FlexLayoutModule, MatProgressBarModule,
        MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatExpansionModule, CdkTableModule
    ],
    exports: [
        NavbarComponent,
        MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule,MatIconModule, MatCardModule, MatGridListModule, FlexLayoutModule, 
        MatProgressBarModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatExpansionModule, CdkTableModule
    ]
})
export class LayoutModule {}