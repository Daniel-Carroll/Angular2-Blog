import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent} from './navbar/navbar.component';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, 
        MdTabsModule, MdIconModule, MdCardModule, MdGridListModule, MdProgressBarModule, MdMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports: [
        RouterModule,
        MdButtonModule, MdCheckboxModule, MdToolbarModule, MdTabsModule, MdIconModule, MdCardModule, MdGridListModule, FlexLayoutModule, MdProgressBarModule,
        MdMenuModule
    ],
    exports: [
        NavbarComponent, 
        MdButtonModule, MdCheckboxModule, MdToolbarModule, MdTabsModule,MdIconModule, MdCardModule, MdGridListModule, FlexLayoutModule, 
        MdProgressBarModule, MdMenuModule
    ]
})
export class LayoutModule {}