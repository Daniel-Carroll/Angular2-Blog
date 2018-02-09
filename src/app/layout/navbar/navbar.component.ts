import { Component, EventEmitter, Input, Output } from '@angular/core';
import {SidenavService} from '../sidenav/sidenav.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'FASTweb';
  @Input() darkTheme: boolean;
  @Output() isDarkTheme = new EventEmitter<boolean>();

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

  public toggleTheme(darkTheme: boolean){
      console.log("Emitting: " + darkTheme)
      darkTheme ? darkTheme = false : darkTheme = true;
      console.log(darkTheme);
      this.isDarkTheme.emit(darkTheme);
  }
}