import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostService } from 'src/app/services/post.service';
import { PostInterface } from 'src/app/interfaces/post-interface';
import { OwnerComponent } from './owner/owner.component';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule,PostComponent,OwnerComponent,NavbarComponent],
  template: `
  <nav class="navbar">
    <app-navbar></app-navbar>
  </nav>
  <p class = "discover">Discover</p>
  <p class = "subtitle">What’s new today</p>
  <div class="list-posts">
    <div class="div-posts">
      <div class ="div-component">
        <app-post class="post-component" *ngFor="let dataPost of this.listPosts" [post]="dataPost"> </app-post>
      </div>
      <div class = "div-component">
        <app-owner class="owner-component" *ngFor="let dataOwner of this.listPosts" [owner]="dataOwner"></app-owner>
      </div>
    </div>
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