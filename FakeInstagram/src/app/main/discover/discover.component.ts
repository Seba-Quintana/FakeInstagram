import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostService } from 'src/app/services/post.service';
import { PostInterface } from 'src/app/interfaces/post-interface';
import { OwnerComponent } from './owner/owner.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule,PostComponent,OwnerComponent,NavbarComponent,CardComponent],
  template: `
  <nav class="navbar">
    <app-navbar></app-navbar>
  </nav>
  <p class = "discover">Discover</p>
  <p class = "subtitle">What’s new today</p>
  <div class = "div-content" >
    <app-card class = "app-card" *ngFor="let cardData of this.listPosts" [cardData]="cardData"></app-card>
  </div>
  `,
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
  postService: PostService = inject(PostService);
  listPosts! : PostInterface[]

  constructor(){
    this.listPosts = this.postService.getPosts();
  }
}