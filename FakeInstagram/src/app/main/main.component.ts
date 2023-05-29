import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from "./discover/discover.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    imports: [CommonModule, DiscoverComponent, RouterModule]
})
export class MainComponent {

}
