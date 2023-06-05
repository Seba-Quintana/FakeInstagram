import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../discover/navbar/navbar.component";

@Component({
	selector: 'app-profile',
	standalone: true,
	template: `
    <nav class="navbar">
    	<app-navbar></app-navbar>
  	</nav>
  `,
	styleUrls: ['./profile.component.css'],
	imports: [CommonModule, NavbarComponent]
})
export class ProfileComponent {

}
