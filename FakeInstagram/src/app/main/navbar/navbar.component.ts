import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from "./nav-button/nav-button.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `
		<div>
			<app-nav-button id="navButtons"></app-nav-button>
		</div>
	`,
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule, NavButtonComponent]
})
export class NavbarComponent {

}
