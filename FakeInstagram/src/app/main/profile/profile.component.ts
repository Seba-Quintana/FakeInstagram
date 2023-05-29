import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../discover/navbar/navbar.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    template: `
    <p>
      <app-navbar></app-navbar>
    </p>
  `,
    styleUrls: ['./profile.component.css'],
    imports: [CommonModule, NavbarComponent]
})
export class ProfileComponent {

}
