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
  <div id="list-posts">
    <app-post *ngFor="let dataPost of this.listPosts" [post]="dataPost"> </app-post>
    <app-owner *ngFor="let dataOwner of this.listPosts" [owner]="dataOwner"></app-owner>
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