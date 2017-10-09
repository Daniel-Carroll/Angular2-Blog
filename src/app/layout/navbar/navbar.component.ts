import { Component } from '@angular/core';
import {SidenavService} from '../sidenav/sidenav.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'FASTweb';

  constructor(
    private sidenavService: SidenavService
  ) { }

  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }
}