import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../discover/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

import { PostComponent } from '../discover/post/post.component';
import { PostService } from 'src/app/services/post.service';
import { PostInterface } from 'src/app/interfaces/post-interface';
import { OwnerComponent } from '../discover/owner/owner.component';
import { CardComponent } from '../discover/card/card.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    template: `
      <app-card class = "app-card" *ngFor="let cardData of this.listPosts" [cardData]="cardData"></app-card>
  `,
    styleUrls: ['./profile.component.css'],
    imports: [CommonModule, PostComponent,OwnerComponent,NavbarComponent,CardComponent]
})
export class ProfileComponent {
  postService: PostService = inject(PostService);
  listPosts! : PostInterface[] | undefined
  username!: string | null
  
  constructor(private route: ActivatedRoute){
    this.username = this.route.snapshot.paramMap.get("user")
    this.listPosts = this.postService.getPostsName(this.username); 
  }
}
