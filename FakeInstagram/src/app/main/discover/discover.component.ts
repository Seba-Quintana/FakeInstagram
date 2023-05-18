import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-discover',
    standalone: true,
    template: `
    <nav class="navbar">
		<app-navbar></app-navbar>
	</nav>
	`,
    styleUrls: ['./discover.component.css'],
    imports: [
		CommonModule,
        NavbarComponent
	]
})
export class DiscoverComponent {

}
