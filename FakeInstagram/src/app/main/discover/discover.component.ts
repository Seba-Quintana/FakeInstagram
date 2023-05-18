import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostService } from 'src/app/services/post.service';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule,PostComponent],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
  postService: PostService = inject(PostService);
  listPosts! : PostInterface[]

  constructor(){
    this.listPosts = this.postService.getPosts();
  }
}
