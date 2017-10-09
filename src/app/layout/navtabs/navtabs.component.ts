import { Component, Input } from '@angular/core';

@Component({
  selector: 'navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabComponent {
  @Input() navLinks: any;  
}