import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule],
  template: `
	<div class="button">
		<svg id="navbarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
		<h3 id="navbarText">Discover</h3>
	</div>
	`,
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {

}