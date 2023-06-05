import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../discover/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-upload',
    standalone: true,
    template: `
	<div>
		<a [routerLink]="['/']" class="exit" >x</a>
	</div>
	<h1>Upload picture</h1>
	<div id="content">
		<button id="button1">Select file...</button>
		<textarea placeholder="Type description..." id="textbox"></textarea>
		<button id="button2">Upload</button>
	</div>
  `,
    styleUrls: ['./upload.component.css'],
    imports: [CommonModule, RouterModule]
})
export class UploadComponent {

}
