import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
	<a [routerLink]="['']" class="button">
		<svg class="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
		<h3 class="navbarText">Discover</h3>
	</a>
	<a [routerLink]="['SearchComponent']" class="button">
		<svg class="navbarIcon" xmlns="http:/www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5Z"/></svg>
		<h3 class="navbarText">Search</h3>
	</a>
	<a class="button">
	<svg class="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
		<h3 class="navbarText">Upload picture</h3>
	</a>
	<a class="button">
		<svg class="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28Zm0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a3.93 3.93 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220Z"/></svg>
		<h3 class="navbarText">Chat</h3>
	</a>
	<a [routerLink]="['ProfileComponent']" class="button">
		<svg class="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
		<h3 class="navbarText">Profile</h3>
	</a>
	<a [routerLink]="['ChatComponent']" class="button">
		<svg class="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
		<h3 class="navbarText">Chat</h3>
	</a>
	`,
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {

}
